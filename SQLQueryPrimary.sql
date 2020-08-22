select * from CropType

exec cropData 'rabi'
select * from CropSell

delete from CropSell

delete from LiveBid

delete from CropBuy

delete from [transaction]

sp_help LiveBid

alter table LiveBid drop constraint LiveBid_fk0

alter table LiveBid add constraint fk_Bemail foreign key(Bemail) references Bidder(Bemail)


sp_help CropSell
alter table cropSell drop constraint PK_CROPSELL

alter table CropSell drop Column CropId

alter table CropSell add CropID int Primary Key identity(5000,1)

alter table LiveBid alter column CropId int

alter table LiveBid add constraint CropSell_fk2 foreign key(CropId) references CropSell(CropID)


sp_help CropBuy
alter table CropBuy drop constraint CropBuy_fk0
alter table CropBuy alter column BidId int not null
alter table CropBuy drop constraint PK_CROPBUY

alter table CropBuy add constraint pk_bidid Primary Key(BidId)



alter table LiveBid drop constraint PK_BidId
alter table LiveBid drop column BidId

alter table LiveBid add BidId int Primary Key identity(1000,1)

sp_help [Transaction]

alter table [Transaction] drop constraint Transaction_fk0
alter table [Transaction] alter column BidID int
alter table [Transaction] add constraint fk_BidId Foreign Key(BidID) references CropBuy(BidId)

alter table CropBuy add constraint fk_BidIdCrop Foreign Key(BidId) references LiveBid(BidId)

SET IDENTITY_INSERT CropSell ON
SET IDENTITY_INSERT CropSell OFF

select * from CropSell
delete from CropSell

alter table CropSell drop constraint Sell_default
alter table CropSell alter column AdminApprove int not null
alter table CropSell add constraint df_key Default '0' for AdminApprove
ALTER TABLE CropSell DROP constraint df_key

update CropSell set AdminApprove = 0 where CropName = 'Rice'


alter proc cropApproval
as
select CropId,CropName,Femail,Fertilizer,Quantity,PhVal,ExpiryDate,BaseFarmerPrice from CropSell where AdminApprove = 0 and DeclineStatus = 0

exec cropApproval

drop proc cropApproval


create proc cropApproved(@id int)
as
update CropSell set AdminApprove = 1 where CropId = @id


create proc cropDeclined(@id int)
as
Delete from  CropSell where CropId = @id

create proc liveCropBid
as
select * from CropSell where AdminApprove = 1

select * from LiveBid
sp_help LiveBid
select * from Bidder

Update LiveBid set BidStatus = 0 where CropId = 5003




create proc insertLiveBid(@cropid int, @baseprice float, @bidprice float, @bemail nvarchar(50))
as
insert into LiveBid(CropId,BasePrice,BidPrice,Bemail) values (@cropid,@baseprice,@bidprice,@bemail)

exec insertLiveBid 5003,2345,4000,'rahul@gmail.com'

delete from LiveBid



alter Procedure maxBidDisplay
as
Select CropSell.CropName as [Crop Name], LiveBid.CropId as CropID,LiveBid.BasePrice as [Farmer Price], Max(LiveBid.BidPrice) as CurrentBid , DateDiff(hour,CURRENT_TIMESTAMP,CropSell.ExpiryDate) as TimeLeft from LiveBid
inner join CropSell on CropSell.CropID = LiveBid.CropId Group by CropSell.CropName, LiveBid.CropId, LiveBid.BasePrice,CropSell.ExpiryDate,CropSell.AdminApprove having CropSell.AdminApprove = 1 and 



select cs.CropName,cs.CropID,lb.Bemail,lb.BidPrice,cs.BaseFarmerPrice from Farmer f inner join CropSell cs
on f.femail = cs.femail inner join LiveBid lb
on cs.CropId = lb.CropId where lb.BidStatus is null and cs.AdminApprove = 1


select cs.CropName,cs.CropID,cs.BaseFarmerPrice ,Max(BidPrice) as [CurrentBid],cs.AdminApprove from Farmer f inner join CropSell cs
on f.femail = cs.femail inner join LiveBid lb
on cs.CropId = lb.CropId  group by cs.CropName, cs.CropID,cs.BaseFarmerPrice having  cs.AdminApprove = 1

select * from bidder
delete from bidder where name like 'Somu'
delete from LiveBid where bemail like 'somu@gmail.com'

insert into bidder values('Somu','somu@gmail.com','5412369874','dhs','fsuhi','bebb','5845','452136','sj785','1234567',1)




alter proc bidApproval
as
select lb.BidId,b.Name,b.Bemail,cs.CropId,cs.CropName,cs.BaseFarmerPrice,cs.Expirydate,Max(lb.BidPrice) as [Current Bid] from CropSell cs inner join
LiveBid lb on cs.CropID = lb.CropId inner join
Bidder b on lb.Bemail = b.Bemail group by b.Name,b.Bemail,cs.CropId,cs.CropName,cs.BaseFarmerPrice,cs.AdminApprove,lb.BidStatus,lb.BidPrice, cs.Expirydate,lb.BidId having cs.AdminApprove = 1 and lb.BidStatus = 0 order by BidId desc

exec bidApproval

select * from CropSell

alter proc soldBid(@bidId int)
as
update LiveBid set BidStatus = 1 where BidId =  @bidId

drop proc cropSold

alter proc cropSold(@cropId int)
as
update CropSell set AdminApprove = 2 where CropID = @cropId

exec cropSold 5007

update CropSell set AdminApprove = 1 where CropName = 'Rice'

update LiveBid set BidStatus = 0 

select * from Cropsell

create proc seeSellCrop(@email nvarchar(50))
as
select cs.CropID,cs.CropName, ct.TypeName from Farmer f inner join CropSell cs
on f.Femail = cs.Femail inner join Crops c on
cs.CropName = c.CropName inner join CropType ct on
c.CropTID = ct.CropTID where cs.AdminApprove = 1

exec seeSellCrop 'rahul@gmail.com'

create proc marketCropBid(@email nvarchar(50))
as
select lb.BidPrice from Farmer f inner join CropSell cs 
on f.Femail = cs.Femail inner join LiveBid lb 
on cs.CropId = lb.CropId where cs.AdminApprove = 1 and lb.BidStatus = 0 order by lb.BidPrice desc


drop proc seeCropBid


create proc FarmerLogin(@username nvarchar(50),@password nvarchar(50))
as
select * from Farmer where Femail = @username and Password = @password



create proc BidderLogin(@username nvarchar(50),@password nvarchar(50))
as
select * from Bidder where Bemail = @username and Password = @password



create proc AdminLogin(@username nvarchar(50),@password nvarchar(50))
as
select * from OfficialUsers where ID = @username and Password = @password

insert into OfficialUsers values('vishal@gmail.com','Vishal','12345')

exec liveCropBid

 
 alter proc farmerMarket(@email nvarchar(50))
 as
 select cs.CropId,cs.cropName,ct.TypeName,cs.BaseFarmerPrice from Farmer f inner join
 CropSell cs on f.Femail = cs.Femail inner join
 Crops c on cs.CropName = c.CropName inner join CropType ct 
 on c.CropTID = ct.CropTID where f.Femail = @email and cs.AdminApprove = 1

 exec farmerMarket 'dev@gmail.com'

 alter proc farmerMarketBid(@email nvarchar(50))
 as
 select cs.CropID,lb.BidPrice from Farmer f inner join CropSell cs on 
 f.Femail = cs.femail inner join LiveBid lb on cs.CropID = lb.CropId
 group by cs.CropId,lb.BidStatus, cs.AdminApprove, lb.BidPrice,f.Femail
 having lb.BidStatus = 0 and cs.AdminApprove = 1 and f.Femail = @email order by lb.BidPrice desc 

 exec farmerMarketBid 'dev@gmail.com'

 delete from LiveBid where BidId = 1008

 delete from CropSell
 delete from LiveBid

 alter table LiveBid alter column BidStatus bit not null
 alter table LiveBid add constraint df_Aa Default 0 for BidStatus
 alter table CropSell alter column AdminApprove int not null
 alter table CropSell add constraint df_Aa Default 0 for AdminApprove

 sp_help LiveBid
 sp_help CropSell

 select * from CropSell

 insert into CropSell(CropName,Femail,Fertilizer,Quantity,PhVal,ExpiryDate,BaseFarmerPrice) values ('Rice','dev@gmail.com','Magnesium',12,'hfui',2020-98-18,500)

 select * from LiveBid
 select * from Documents

 delete from LiveBid

 sp_help [Transaction]







 alter proc pendingTransaction(@email nvarchar(50),@cropId int)
 as
 select lb.BidId,b.Name,b.bemail,b.AccNo,b.IFSC,cs.CropId,cs.CropName,cs.BaseFarmerPrice,lb.BidPrice,F.Name as [FName],f.Femail,f.AccNo as [Faccount],f.IFSC as [FIFSC] from Bidder b inner join LiveBid lb on b.Bemail = lb.Bemail
 inner join CropSell cs on lb.CropId = cs.CropID 
 inner join Farmer f on cs.Femail = f.Femail where lb.BidStatus = 1 and cs.AdminApprove = 2 and b.Bemail = @email and lb.CropId = @cropId

 alter proc cropBought(@email nvarchar(50))
 as
 select b.Name,b.Bemail,cs.CropID,cs.CropName,cs.BaseFarmerPrice,lb.BidPrice,F.Name as [FName],F.Femail  from Bidder b inner join LiveBid lb on b.Bemail = lb.Bemail
 inner join CropSell cs on lb.CropId = cs.CropID 
 inner join Farmer f on cs.Femail = f.Femail where lb.BidStatus = 1 and cs.AdminApprove = 2 and b.Bemail = @email

 
 create proc trans(@bidId int)
 as
 insert into [Transaction](BidID) values (@bidId)

 select * from Farmer
 
 
 create proc buyCrop(@bidId int,@price int)
 as
 insert into CropBuy values (@bidId,@price)
 
alter proc setStatusCrop(@cropId int)
as
update CropSell set AdminApprove = 3 where CropID = @cropId
 
 
 select * from Bidder
 select * from Documents

 sp_help [Transaction]
 alter table [Transaction] drop constraint PK_TRANSACTION
 alter table [Transaction] drop column TransactionID
 alter table [Transaction] add [TransactioID] int Primary Key identity(4562,5)

 alter table [Transaction] add constraint df_Date default Current_timestamp for Date
 alter table [Transaction] add constraint df_payment default 'NEFT' for PaymentType


 select * from [transaction]
 select * from CropBuy
 delete from CropBuy
 delete from [Transaction]
 select * from CropSell
 update CropSell set AdminApprove = 2

 create proc bidderHistory(@email nvarchar(50))
 as
 select cs.CropName,cs.Quantity, cs.BaseFarmerPrice, lb.BidPrice from LiveBid lb inner join 
 CropSell cs on lb.CropId = cs.CropID where lb.BidStatus = 1 and cs.AdminApprove = 3 and lb.Bemail = @email

 drop proc bidderHidtory

 alter proc transacDetails(@email nvarchar(50))
 as
 select cb.BuyPrice, t.PaymentType,t.TransactioID,t.Date from LiveBid lb inner join 
 CropBuy cb on lb.BidId = cb.BidId inner join
 [Transaction] t on cb.BidId = t.BidID where lb.Bemail = @email

 exec transacDetails 'rahul@gmail.com'

 alter proc farmerSoldHistory(@email nvarchar(50))
 as
 select cs.CropName,cs.Quantity,cs.BaseFarmerPrice,lb.BidPrice from Farmer f inner join
 CropSell cs on f.Femail = cs.Femail inner join
 LiveBid lb on cs.CropID = lb.CropId where cs.AdminApprove = 3 and lb.BidStatus = 1 and f.Femail = @email


 create proc checkFarmerRegistered(@email nvarchar(50))
 as
 select Name,Femail from Farmer where Femail=@email

 alter proc checkBidderRegistered(@email nvarchar(50))
 as
 select Name,Bemail from Bidder where Bemail=@email

delete from Farmer where Name like 'yfuy'
 select * from Documents

 select * from OfficialUsers

 select * from CropSell
 delete from CropSell
 delete from LiveBid
 delete from CropBuy
 delete from [Transaction]

 alter table CropSell add DeclineStatus bit default '0'



 select * from farmer
alter proc cropDeclined(@id int)
as
Update CropSell set DeclineStatus = 1 where CropId = @id


alter proc viewCropDeclined(@email nvarchar(50))
as
select * from CropSell where Femail = @email and DeclineStatus = 1

exec viewCropDeclined 'dev@gmail.com'

update CropSell set DeclineStatus = 0


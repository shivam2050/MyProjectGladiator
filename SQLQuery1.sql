select * from cropsell
select * from cropbuy
select * from Farmer
sp_help cropsell
insert into Transaction(TransactionId,Date,BidId) values('101','20-07-2020','1')

insert into Farmer values('Dev','dev@gmail.com','7896584574','Nehru Nagar','Jaipur','Rajasthan','201524','523658','478569','12345',1)

insert into Bidder values('Rahul','rahul@gmail.com','8965478596','Lajpat Nagar','Gurgaon','Haryana','274589','458967','745896','12345',1)

insert into CropType values('101','Rabi')
insert into Crops values('101','Rice',500)
insert into CropSell values('Rice','201','dev@gmail.com','Phosphorus',200,2,19-07-2020,10000,1)

alter table LiveBid add constraint df default CURRENT_TIMESTAMP for time 
insert into LiveBid(CropId,BasePrice,BidPrice,BidStatus,Bemail,BidId,TransBidID) values ('201',500,600,1,'rahul@gmail.com',301,401)
select * from LiveBid

alter table LiveBid alter column BidStatus bit
alter table LiveBid drop column time
alter table LiveBid add time datetime default Current_timestamp

select CURRENT_TIMESTAMP

insert into CropBuy values('301',600)
select * from CropBuy

insert into [Transaction] values('401','Card',21-07-2020,'301')

sp_help [Transaction]

alter proc sold(@email varchar(50))
as
select cs.CropName,cs.Quantity,cb.BuyPrice from CropBuy cb 
inner join LiveBid lb on lb.BidId = cb.BidId 
inner join CropSell cs on lb.CropId = cs.CropId
inner join Farmer f on cs.Femail = f.Femail
where f.Femail = @email and lb.BidStatus = 1

exec sold 'dev@gmail.com'

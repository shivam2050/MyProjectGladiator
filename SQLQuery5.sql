select * from farmer
sp_help farmer

alter proc addFarmer(@name nvarchar(50),@femail nvarchar(50),@contactno nvarchar(50),@address nvarchar(50),@city nvarchar(50),@state nvarchar(50),@pin nvarchar(50), @accno nvarchar(50),@ifsc nvarchar(50),@password nvarchar(50))
as
insert into Farmer(name,femail,contactno,[address],city,[state],pin,accno,ifsc,[password]) values(@name,@femail,@contactno,@address,@city,@state,@pin,@accno,@ifsc,@password)

insert into Farmer(name,femail,contactno,[address],city,state,pin,accno,ifsc,[password]) values ('g','gt@gmail.com','7458965896','dhu','Kovalam','Keralal[Kl]','4521','4521','iho','451')

select * from all_cities1

select * from farmer
delete from farmer where name like 'dh' 
select * from Documents
select * from bidder
 update cropSell set declinestatus = 0 where Quantity = 40
delete from cropSell
select * from CropSell
sp_help cropSell
select * from cropbuy
select * from livebid
select * from [Transaction]
sp_help [transaction]

alter table CropSell alter column DeclineStatus bit not null
sp_help bidder

delete from [transaction]
delete from cropbuy
delete from livebid

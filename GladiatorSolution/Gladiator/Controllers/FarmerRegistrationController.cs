using Gladiator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;

namespace Gladiator.Controllers
{
    [EnableCors(origins: "http://localhost:4200",headers:"*",methods:"*")]
    public class FarmerRegistrationController : ApiController
    {
        private gladiatorEntities1 db = new gladiatorEntities1();       
        // GET: api/FarmerRegistration
        public IQueryable<Farmer> Get()
        {
            return db.Farmers;
        }

        // GET: api/FarmerRegistration/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/FarmerRegistration
        [ResponseType(typeof(Farmer))]
        public void Post(Farmer Farmer)
        {
            try
            {
                //db.addFarmer(Farmer.name, Farmer.femail, Farmer.contactno, Farmer.address, Farmer.city, Farmer.state, Farmer.pin, Farmer.accno, Farmer.ifsc, Farmer.password);
                db.Farmers.Add(Farmer);
                db.SaveChanges();

            }
            catch (System.Data.Entity.Validation.DbEntityValidationException dbEx)
            {
                Exception raise = dbEx;
                foreach (var validationErrors in dbEx.EntityValidationErrors)
                {
                    foreach (var validationError in validationErrors.ValidationErrors)
                    {
                        string message = string.Format("{0}:{1}",
                            validationErrors.Entry.Entity.ToString(),
                            validationError.ErrorMessage);
                        // raise a new exception nesting  
                        // the current instance as InnerException  
                        raise = new InvalidOperationException(message, raise);
                    }
                }
                throw raise;
            }
        }

        // PUT: api/FarmerRegistration/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/FarmerRegistration/5
        public void Delete(int id)
        {
        }
    }
}

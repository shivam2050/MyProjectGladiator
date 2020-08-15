using Gladiator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http.Cors;
using System.Web.Http;
using System.Web.Http.Description;

namespace Gladiator.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class BidderRegistrationController : ApiController
    {
        private gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/BidderRegistration
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/BidderRegistration/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/BidderRegistration
        [ResponseType(typeof(Bidder))]
        public void Post(Bidder Bidder)
        {
            try
            {
                db.Bidders.Add(Bidder);
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

        // PUT: api/BidderRegistration/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/BidderRegistration/5
        public void Delete(int id)
        {
        }
    }
}

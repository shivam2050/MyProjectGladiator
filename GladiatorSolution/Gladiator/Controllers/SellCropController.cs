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
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class SellCropController : ApiController
    {
        gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/SellCrop
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/SellCrop/5
        public string Get(int id)
        {
            return "value";
        }

        [ResponseType(typeof(CropSell))]
        // POST: api/SellCrop
        public void Post([FromBody]CropSell sell)
        {
            try
            {
                db.CropSells.Add(sell);
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

        // PUT: api/SellCrop/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/SellCrop/5
        public void Delete(int id)
        {
        }
    }
}

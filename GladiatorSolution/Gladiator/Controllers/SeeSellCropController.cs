using Gladiator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Gladiator.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class SeeSellCropController : ApiController
    {
        gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/SeeSellCrop
        public IEnumerable<seeSellCrop_Result> Get(string email)
        {
            return db.seeSellCrop(email);
        }

        // GET: api/SeeSellCrop/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/SeeSellCrop
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/SeeSellCrop/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/SeeSellCrop/5
        public void Delete(int id)
        {
        }
    }
}

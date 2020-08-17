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
    public class UpdateCropSellController : ApiController
    {
        gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/UpdateCropSell
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/UpdateCropSell/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/UpdateCropSell
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/UpdateCropSell/5
        public void Put(int id, [FromBody]string value)
        {
            db.cropSold(id);
        }

        // DELETE: api/UpdateCropSell/5
        public void Delete(int id)
        {
        }
    }
}

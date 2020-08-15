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
    public class SoldHistoryController : ApiController
    {
        gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/SoldHistory
        public IEnumerable<sold_Result> Get([FromUri] string email)
        {
            return db.sold(email);

        }

        // GET: api/SoldHistory/5
        public string Get(int id,[FromBody]string email)
        {
            return "welcome";
        }

        // POST: api/SoldHistory
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/SoldHistory/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/SoldHistory/5
        public void Delete(int id)
        {
        }
    }
}

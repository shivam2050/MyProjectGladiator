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
    public class SeeCropBidController : ApiController
    {
        gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/SeeCropBid
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };

        }

        // GET: api/SeeCropBid/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/SeeCropBid
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/SeeCropBid/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/SeeCropBid/5
        public void Delete(int id)
        {
        }
    }
}

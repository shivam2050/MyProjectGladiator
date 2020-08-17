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
    public class BidderLoginController : ApiController
    {
        gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/BidderLogin
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/BidderLogin/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/BidderLogin
        public IEnumerable<BidderLogin_Result> Post([FromBody]BidderLogi bidder)
        {
            return db.BidderLogin(bidder.Bemail, bidder.Password);
        }

        // PUT: api/BidderLogin/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/BidderLogin/5
        public void Delete(int id)
        {
        }
    }
}

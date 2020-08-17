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
    public class AcceptBidderController : ApiController
    {
        gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/AcceptBidder
        public IEnumerable<viewBidderApproval_Result> Get()
        {
            return db.viewBidderApproval();
        }

        // GET: api/AcceptBidder/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/AcceptBidder
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/AcceptBidder/5
        public void Put(int id, [FromBody]string value)
        {
            db.bidderApproval(value);
        }

        // DELETE: api/AcceptBidder/5
        public void Delete(int id)
        {
        }
    }
}

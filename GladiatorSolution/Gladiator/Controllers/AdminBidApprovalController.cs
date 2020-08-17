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
    public class AdminBidApprovalController : ApiController
    {
        gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/AdminBidApproval
        public IEnumerable<bidApproval_Result> Get()
        {
            return db.bidApproval();
        }

        // GET: api/AdminBidApproval/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/AdminBidApproval
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/AdminBidApproval/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/AdminBidApproval/5
        public void Delete(int id)
        {
        }
    }
}

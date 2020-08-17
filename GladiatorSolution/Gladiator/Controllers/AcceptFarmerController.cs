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
    public class AcceptFarmerController : ApiController
    {
        gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/AcceptFarmer
        public IEnumerable<viewFarmerApproval_Result> Get()
        {
            return db.viewFarmerApproval();
        }

        // GET: api/AcceptFarmer/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/AcceptFarmer
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/AcceptFarmer/5
        public void Put(int id,[FromBody]string value)
        {
            db.farmerApproval(value);
        }

        // DELETE: api/AcceptFarmer/5
        public void Delete([FromUri] string id)
        {
            db.farmerDecline(id);
        }
    }
}

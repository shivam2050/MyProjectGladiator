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
    public class FarmerSoldHistoryController : ApiController
    {
        gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/FarmerSoldHistory
        public IEnumerable<farmerSoldHistory_Result> Get([FromUri]string email)
        {
            return db.farmerSoldHistory(email);
        }

        // GET: api/FarmerSoldHistory/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/FarmerSoldHistory
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/FarmerSoldHistory/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/FarmerSoldHistory/5
        public void Delete(int id)
        {
        }
    }
}

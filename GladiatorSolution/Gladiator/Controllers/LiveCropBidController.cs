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
    public class LiveCropBidController : ApiController
    {
        gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/LiveCropBid
        public IEnumerable<liveCropBid_Result> Get()
        {
            return db.liveCropBid();
        }

        // GET: api/LiveCropBid/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/LiveCropBid
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/LiveCropBid/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/LiveCropBid/5
        public void Delete(int id)
        {
        }
    }
}

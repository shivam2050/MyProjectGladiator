﻿using Gladiator.Models;
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
    public class AddLiveBidController : ApiController
    {
        gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/AddLiveBid
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/AddLiveBid/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/AddLiveBid
        public void Post([FromBody]LiveBid live)
        {
            db.insertLiveBid(live.CropId, live.BasePrice, live.BidPrice, live.Bemail);
        }

        // PUT: api/AddLiveBid/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/AddLiveBid/5
        public void Delete(int id)
        {
        }
    }
}

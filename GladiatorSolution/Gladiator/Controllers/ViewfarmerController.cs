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
    public class ViewfarmerController : ApiController
    {
        gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/Viewfarmer
        public IEnumerable<viewFarmer_Result> Get()
        {
            return db.viewFarmer();
        }

        // GET: api/Viewfarmer/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Viewfarmer
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Viewfarmer/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Viewfarmer/5
        public void Delete(int id)
        {
        }
    }
}

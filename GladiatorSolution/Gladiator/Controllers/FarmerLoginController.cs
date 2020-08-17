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
    public class FarmerLoginController : ApiController
    {
        gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/FarmerLogin
        //public IEnumerable<FarmerLogin_Result> Get()
        //{
        //    return db.FarmerLogin(farmer.Femail,farmer.Password);
        //}

        // GET: api/FarmerLogin/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/FarmerLogin
        public IEnumerable<FarmerLogin_Result> Post([FromBody] FarmerLogin farmer)
        {
            return db.FarmerLogin(farmer.Femail, farmer.Password);
        }

        // PUT: api/FarmerLogin/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/FarmerLogin/5
        public void Delete(int id)
        {
        }
    }
}

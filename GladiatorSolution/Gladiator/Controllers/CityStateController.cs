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
    public class CityStateController : ApiController
    {
        gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/CityState
        public IEnumerable<selectStates_Result> Get()
        {
            return db.selectStates();
        }

        // GET: api/CityState/5
        public IEnumerable<selectCity_Result> Get([FromUri]string id)
        {
            return db.selectCity(id);
        }

        // POST: api/CityState
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/CityState/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/CityState/5
        public void Delete(int id)
        {
        }
    }
}

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
    public class CropDataController : ApiController
    {
        gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/CropData
        public IEnumerable<cropData_Result> Get([FromUri] string type)
        {
            return db.cropData(type); 
        }

        // GET: api/CropData/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/CropData
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/CropData/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/CropData/5
        public void Delete(int id)
        {
        }
    }
}

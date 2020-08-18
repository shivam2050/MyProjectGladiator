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
    public class ViewCropDeclinedController : ApiController
    {
    gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/ViewCropDeclined
        public IEnumerable<viewCropDeclined_Result> Get([FromUri]string email)
        {
            return db.viewCropDeclined(email);
        }

        // GET: api/ViewCropDeclined/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/ViewCropDeclined
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/ViewCropDeclined/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ViewCropDeclined/5
        public void Delete(int id)
        {
        }
    }
}

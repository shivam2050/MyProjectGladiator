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
    public class ViewCropController : ApiController
    {
        gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/ViewCrop
        public IEnumerable<cropApproval_Result> Get()
        {
            return db.cropApproval();
        }

        // GET: api/ViewCrop/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/ViewCrop
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/ViewCrop/5
        public void Put(int id, [FromBody]string value)
        {
            db.cropApproved(id);
        }

        // DELETE: api/ViewCrop/5
        public void Delete(int id)
        {
            db.cropDeclined(id);
        }
    }
}

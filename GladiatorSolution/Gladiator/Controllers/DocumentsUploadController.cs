using Gladiator.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;

namespace Gladiator.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class DocumentsUploadController : ApiController
    {
        gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/DocumentsUpload
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/DocumentsUpload/5
        public string Get(int id)
        {
            return "value";
        }

        [ResponseType(typeof(Document))]
        // POST: api/DocumentsUpload
        public void Post([FromBody]Document document)
        {
            db.Documents.Add(document);
            db.SaveChanges();
        }

        // PUT: api/DocumentsUpload/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/DocumentsUpload/5
        public void Delete(int id)
        {
        }
    }
}

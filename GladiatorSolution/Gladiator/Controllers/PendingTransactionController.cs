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
    public class PendingTransactionController : ApiController
    {
        gladiatorEntities1 db = new gladiatorEntities1();
        // GET: api/PendingTransaction
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/PendingTransaction/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/PendingTransaction
        public IEnumerable<pendingTransaction_Result> Post([FromBody]PendingTransaction transaction)
        {
            return db.pendingTransaction(transaction.Bemail,transaction.CropId);
        }

        // PUT: api/PendingTransaction/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/PendingTransaction/5
        public void Delete(int id)
        {
        }
    }
}

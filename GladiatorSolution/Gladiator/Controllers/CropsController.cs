using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using Gladiator.Models;

namespace Gladiator.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class CropsController : ApiController
    {
        private gladiatorEntities1 db = new gladiatorEntities1();

        // GET: api/Crops
        public IQueryable<Crop> GetCrops()
        {
            return db.Crops;
        }

        // GET: api/Crops/5
        [ResponseType(typeof(Crop))]
        public IHttpActionResult GetCrop(string id)
        {
            Crop crop = db.Crops.Find(id);
            if (crop == null)
            {
                return NotFound();
            }

            return Ok(crop);
        }

        [ResponseType(typeof(void))]
        public IHttpActionResult PutCrop([FromBody] Crop crop)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Entry(crop).State = EntityState.Modified;
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

            // POST: api/Crops
        [ResponseType(typeof(Crop))]
        public IHttpActionResult PostCrop(Crop crop)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Crops.Add(crop);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (CropExists(crop.CropName))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = crop.CropName }, crop);
        }

        // DELETE: api/Crops/5
        [ResponseType(typeof(Crop))]
        public IHttpActionResult DeleteCrop(string id)
        {
            Crop crop = db.Crops.Find(id);
            if (crop == null)
            {
                return NotFound();
            }

            db.Crops.Remove(crop);
            db.SaveChanges();

            return Ok(crop);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CropExists(string id)
        {
            return db.Crops.Count(e => e.CropName == id) > 0;
        }
    }
}
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WEBAPI.Models;

namespace WEBAPI.Controllers
{
    public class SalesDataController : ApiController
    {
        private SalesDataEntities db = new SalesDataEntities();

        // GET: api/SalesData
        public IQueryable<SalesDataSet> GetSalesDataSets()
        {
            return db.SalesDataSets;
        }

        // GET: api/SalesData/5
        [ResponseType(typeof(SalesDataSet))]
        public IHttpActionResult GetSalesDataSet(int id)
        {
            SalesDataSet salesDataSet = db.SalesDataSets.Find(id);
            if (salesDataSet == null)
            {
                return NotFound();
            }

            return Ok(salesDataSet);
        }

        // PUT: api/SalesData/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutSalesDataSet(int id, SalesDataSet salesDataSet)
        {
            

            if (id != salesDataSet.id)
            {
                return BadRequest();
            }

            db.Entry(salesDataSet).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SalesDataSetExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/SalesData
        [ResponseType(typeof(SalesDataSet))]
        public IHttpActionResult PostSalesDataSet(SalesDataSet salesDataSet)
        {
            

            db.SalesDataSets.Add(salesDataSet);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = salesDataSet.id }, salesDataSet);
        }

        // DELETE: api/SalesData/5
        [ResponseType(typeof(SalesDataSet))]
        public IHttpActionResult DeleteSalesDataSet(int id)
        {
            SalesDataSet salesDataSet = db.SalesDataSets.Find(id);
            if (salesDataSet == null)
            {
                return NotFound();
            }

            db.SalesDataSets.Remove(salesDataSet);
            db.SaveChanges();

            return Ok(salesDataSet);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SalesDataSetExists(int id)
        {
            return db.SalesDataSets.Count(e => e.id == id) > 0;
        }
    }
}
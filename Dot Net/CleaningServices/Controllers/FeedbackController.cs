using CleaningServices.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace CleaningServices.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors]
    public class FeedbackController : Controller
    {
        [HttpGet]
        public List<Feeback> GetFeebacks()
        {
            List<Feeback> bookings = new List<Feeback>();
            using (var db = new cleaningdbContext())
            {
                bookings = db.Feebacks.ToList();
            }
            return bookings;
        }
        
    }
}

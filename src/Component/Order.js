export default function Order(){

    return (
      <section class="container-fluid mt-2" >
        <div>
          <h1>Enter Order details</h1>
        </div>
        <hr size="5"></hr>
     <form class="row g-3 mt-2">
  <div class="col-md-5">
    <label for="inputEmail4" class="form-label">Date</label>
    <input type="date" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-8">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="house no,street name,area"/>
  </div>
  <div class="col-8">
    <label for="inputAddress" class="form-label">Service Name</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Service details" disabled/>
  </div>

  <div class="col-12">
    <button type="submit" class="btn btn-outline-primary" disabled>Book</button>
  </div>
</form>
    </section>
    )
}
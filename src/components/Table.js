// import React, { Component } from 'react'
// export class Table extends Component {
//   static propTypes = {

//   }

//   render() {
//     return (
//         <div className=" text-yellow-600 " style={{ backgroundColor: 'gray-300' }}>
//         <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//     <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//     <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//     <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//     <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//     <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//     <th scope="row ">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//   </tbody>
// </table>
//       </div>
//     )
//   }
// }

// export default Table




 import React, { Component } from 'react'
 import $ from 'jquery';
 import './tbl.css'
export class Table extends Component {
  static propTypes = {

  }

  render() {
    $(document).ready(function() {
      $(".search").keyup(function () {
        var searchTerm = $(".search").val();
        var listItem = $('.results tbody').children('tr');
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
        
      $.extend($.expr[':'], {'containsi': function(elem, i, match, array){
            return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
        }
      });
        
      $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e){
        $(this).attr('visible','false');
      });
    
      $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e){
        $(this).attr('visible','true');
      });
    
      var jobCount = $('.results tbody tr[visible="true"]').length;
        $('.counter').text(jobCount + ' item');
    
      if(jobCount == '0') {$('.no-result').show();}
        else {$('.no-result').hide();}
          });
    });
    return (
      <>
      <div style={{backgroundColor:'white'}}>
      <div class="form-group pull-left">
    <input type="text" class="search form-control" placeholder="What you looking for?"/>
</div>
<span class="counter pull-right"></span>
<table class="table table-hover table-bordered results">
  <thead>
    <tr>
      <th class="col-md-5 col-xs-4">Name </th>
      <th class="col-md-5 col-xs-4">Name </th>
      <th class="col-md-4 col-xs-4">TechStack</th>
      <th class="col-md-3 col-xs-4">Gmail/Github</th>
    </tr>
    <tr class="warning no-result">
      <td colspan="4"><i class="fa fa-warning"></i> No result</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      {/* <th scope="row">1</th> */}
      <td>Vatanay Özbeyli</td>
      <td>Vatanay Özbeyli</td>
      <td>UI & UX</td>
      <td>Istanbul</td>
    </tr>
    <tr>
      {/* <th scope="row">2</th> */}
      <td>Vatanay Özbeyli</td>
      <td>Burak Özkan</td>
      <td>Software Developer</td>
      <td>Istanbul</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Egemen Özbeyli</td>
      <td>Purchasing</td>
      <td>Kocaeli</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Engin Kızıl</td>
      <td>Sales</td>
      <td>Bozuyük</td>
    </tr>
  </tbody>
</table>
</div>
</>
      )
        }
      }
      
      export default Table
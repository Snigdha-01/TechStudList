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
    <input type="text" class="search form-control" style={{width:'100%' , height:'100%'}} placeholder="What you looking for?"/>
</div>
<span class="counter pull-right"></span>
<table class="table table-hover table-bordered results">
  <thead>
    <tr>
      <th class="col-md-5 col-xs-4">Name </th>
      <th class="col-md-5 col-xs-4">Gmail</th>
      <th class="col-md-4 col-xs-4">TechStack</th>
      <th class="col-md-3 col-xs-4">Linkdin</th>
    </tr>
    <tr class="warning no-result">
      <td colspan="4"><i class="fa fa-warning"></i> No result</td>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>Pratyush Singh</td>
      <td>aries.pratyush@gmail.com </td>
      <td>JAVA || Kotlin || Backend|| Open source contributor || 4⭐ on Codechef (1916)</td>
      <td>https://www.linkedin.com/in/pratyush-singh-9323ab20a/</td>
    </tr>
    <tr>
      <td>Aniket Rajput</td>
      <td>aniketrajput992@gmail.com</td>
      <td>Web Developer| CP</td>
      <td>https://www.linkedin.com/in/aniketrajput25</td>
    </tr>
    <tr>
      <td>Prajwal S N</td>
      <td>prajwalnadig21@gmail.com </td>
      <td>Rust Language Engineer</td>
      <td>https://www.linkedin.com/in/snprajwal/</td>
    </tr>
    <tr>
      <td>Anshu Pandey</td>
      <td>vegetaaa1910@gmail.com </td>
      <td>Full-Stack Developer  | Learning Advance DSA | Blockchain</td>
      <td>https://www.linkedin.com/in/anshu-pandey-a67829129/</td>
    </tr>
    <tr>
      <td>Rahul Sharma</td>
      <td>rahulsharma4329@gmail.com</td>
      <td>MERN Stack Developer | IOT</td>
      <td>https://www.linkedin.com/in/rahul-sharma-44bb54195/</td>
    </tr>
    <tr>
      <td>Harsh gupta</td>
      <td> harsh3101gupta@gmail.com</td>
      <td>Flutter Developer | Devops</td>
      <td>https://www.linkedin.com/in/harsh-gupta-589916216/</td>
    </tr>
    <tr>
      <td>Priyanshu Gupta</td>
      <td> guptapriyanshu462@gmail.com</td>
      <td>Candidate Master@Codeforces (1930) | 5⭐️ @Codechef (2066)</td>
      <td>https://www.linkedin.com/in/priyanshu-gupta-0a16a6227/</td>
    </tr>
    
    <tr>
      <td>Palak Khandelwal</td>
      <td> palakhandelwalgp@gmail.com</td>
      <td>WebDev (MERN)</td>
      <td>https://www.linkedin.com/in/palak-khandelwal/</td>
    </tr>
    <tr>
      <td>Saanvika Bajaj</td>
      <td> saanvikabajaj@gmail.com</td>
      <td>Full Stack Web Developer | Graphic Designing</td>
      <td>https://www.linkedin.com/in/saanvika-bajaj/</td>
    </tr>
    <tr>
      <td>Aryan Pandey</td>
      <td>aryanpandeygcp1507@gmail.com</td>
      <td>MERN stack developer | System Design | Microservices and devops</td>
      <td>https://www.linkedin.com/in/aryanpandey1507/</td>
    </tr>
    <tr>
      <td>Rithik Raj Pandey</td>
      <td>rrpandey8055@gmail.com</td>
      <td>Startup | Code & Content </td>
      <td>https://www.linkedin.com/in/rithikrajyt/</td>
    </tr>
    <tr>
      <td>Prasham Vipul</td>
      <td>prasham.pillu@gmail.com</td>
      <td>competitive coding</td>
      <td>https://www.linkedin.com/in/prasham-vipul-prabhakar-947534214/</td>
    </tr>
    <tr>
      <td>Aditya Gupta</td>
      <td>adityagupta9936ad@gmail.com</td>
      <td>Mobile Application Developer • Kotlin</td>
      <td>https://www.linkedin.com/in/aditya-gupta-009520226/</td>
    </tr>
    <tr>
      <td>Maaz Karim</td>
      <td>maazkarim02@gmail.com</td>
      <td>Machine Learning | Deep Learning | Philomath</td>
      <td>https://www.linkedin.com/in/maazkarim-0312/</td>
    </tr>
  </tbody>
</table>
</div>
</>
      )
        }
      }
      
      export default Table
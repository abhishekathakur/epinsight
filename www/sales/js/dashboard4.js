var dashboard4= (function () {

    "use strict";

    // Currently selected dashboard values
   
  var query2 ="";
  var query_srch="";
  var query_post="";
  var pval=0.0;
  var val = 0.0;
    /* Render the dashboard */

    function render() {
    	
    	//postQuery();
/*
        var html ="<table class='table'><tr><td>Customer Group</td><td>:</td><td><input type='text' id='cgrpid' id='cgrpid' name='cgrpid' class='form-control'></td></tr>"+
		   "<tr><td>Year</td><td>:</td><td><input type='text' id='cgrpid'></td></tr>"+
		   "<tr><td>Forecast</td><td>:</td><td><input type='text' id='cgrpid'></td></tr>"+
		   "<tr><td colspan=2><input class='btn btn-lg btn-primary btn-block' type='button' value='Post' onClick='sendThisRequest()' /></td></tr>"+
		   "</table>"
            
		   '<div id="grpah1" class="chart chart2"></div>' ;
				

        $("#content").html(html);

  */

            


	
    selecCustomerGrp();
    createForm();

	
    }
	return {
		render : render
		
	}

}());


function selecCustomerGrp()
{
	 query2 ={

			 query: {
			 	
			 	bool: {
			 		must: [{ match: { Year_Name:  '2015-16' }}
			 			 
			 		 ]
			 			}
			 			
			 },
			 'size':0,

			 aggs: {
				 CGrp: {
				      terms: {
				        field: 'Customer_Grp',
				        size: 10,
				        order: {
				          1: 'desc'
				        }
				      },
				      aggs: {
				        1: {
				          cardinality: {
				            field: 'Customer_Grp'
				          }
				        }
				      }
				    }
				  }
				}
 
}


function jsFunction(value)
{
   var cgid=document.getElementById("cgrpid").value;
   var yr=document.getElementById("yearid").value;
   var cntry=document.getElementById("cntryid").value;
  
   if(cntry!="Select")
	   {
    query_srch ={

			 query: {
			 	
			 	bool: {
			 		must: [{ match: { Year_Name:  yr }},
			 		      {  match: { Customer_Grp: cgid }},
			 		      {  match: { Country: cntry }}
			 			 
			 		 ]
			 			}
			 			
			 },
			 'size':0,
			 aggs: {
				    1: {
				      sum: {
				        field: 'Post_Val'
				      }
				    }
				  }
				}
   
   
        getForecastData();
	   }
   else
	   {
	   alert("Please Select Country");
	   }
}


function getForecastData()

{
	
$.ajax({
  url: 'http://192.168.10.142:9200/.salespost/pdata/_search',
  dataType: 'json',
  type: 'POST',
  contentType: 'application/json',
  crossDomain: true,
  data: JSON.stringify(query_srch),
	 //data: {"search": search_term},
 success: function(json) {
	  
   ///alert(json.aggregations[1].value);
	 
	  
   document.getElementById("forecastval").value=json.aggregations[1].value==null?"0":json.aggregations[1].value;
	  
   pval=document.getElementById("forecastval").value;
   pval=Number(parseFloat(pval));
  }
});
//deleteQuery();
//postQuery();
}



function deleteQuery()
{
	 
	 var cgid=document.getElementById("cgrpid").value;
	 var yr=document.getElementById("yearid").value;
	 var cntry=document.getElementById("cntryid").value;
	
   var query_del ={

			 query: {
			 	
			 	bool: {
			 		must: [{ match: { Year_Name:  yr }},
			 		      {  match: { Customer_Grp:  cgid }},
			 		       {  match: { Country: cntry }}
			 			 
			 		 ]
			 			}
			 			
			 }
				}
   
   
     delForecastData(query_del);
   
}

function delForecastData(query_del)

{
	
$.ajax({
  url: 'http://192.168.10.142:9200/.salespost/pdata/_query',
  dataType: 'json',
  type: 'DELETE',
  contentType: 'application/json',
  crossDomain: true,
  data: JSON.stringify(query_del),
	 //data: {"search": search_term},
 success: function(json) {
	  
   
	 alert("Successfully Post the data!");
	  
  //document.getElementById("forecastval").value=json.aggregations[1].value==null?"0":json.aggregations[1].value;
	  
	   
  }
});

}

function postQuery()
{   val=0.0;
    
	//pval=0.0; 
	val=document.getElementById("forecastval").value;
	 var cgid=document.getElementById("cgrpid").value;
	 var yr=document.getElementById("yearid").value;
	 var cntry=document.getElementById("cntryid").value;
	
	 
	// val=parseFloat(val);
	 
	 var tval=parseFloat(val).toFixed(2) ;
	
	 
	 if(cntry!="Select")
		 {
		 if(cgid!="Select")
			 {
			  query_post ={

					   
					  Year_Name:  yr,
					  Customer_Grp:  cgid,
					  Sales_Group: 'abhi',
					  Country: cntry ,
					  Post_Val : Number(tval)
	           
					
			 	}
			   if(pval>0 & val>0)
			    {
				   deleteQuery()
			      postForecastData();
			    }
			   else if(pval==0 & val>0)
				  {
				    postForecastData();
				   }
			   else
				   {
				   alert("Value more than 0 !")
				   }
					 
			   }
				 else
				   {
				   alert("Please Select Country");
				   }
				 
			}
			 else
			   {
			   alert("Please Select Country");
			   }
		   
}

function postForecastData()

{ 
	var d = new Date().getTime();
	
$.ajax({
  url: 'http://192.168.10.142:9200/.salespost/pdata',
  dataType: 'json',
  type: 'POST',
  contentType: 'application/json',
  crossDomain: true,
  data: JSON.stringify(query_post),
	 //data: {"search": search_term},
 success: function(json) {
	  alert("Successfully Post the data!")
   ///alert(json.aggregations[1].value);
	 
	  
  //document.getElementById("forecastval").value=json.aggregations[1].value==null?"0":json.aggregations[1].value;
	  
	   
  }
});

}

function createForm()

              {

              $.ajax({
                url: 'http://192.168.10.142:9200/.salesdata/_search',
                dataType: 'json',
                type: 'POST',
                contentType: 'application/json',
                crossDomain: true,
                data: JSON.stringify(query2),
				 //data: {"search": search_term},
               success: function(json) {
				  
                 // alert(""+JSON.parse(data.hits.hits.count));
                 // $("#results").empty();
                 // $("#results").append("<p>Results for <b>" + $("#searchterm").val() + "</b></p>");
				  //alert(json.aggregations[1].value);
            	   var html ="<h3 class=bg-primary>Market Volume</h3><div class='form-group'><label class='control-label'>&nbsp;&nbsp;&nbsp;&nbsp;Year</label><select class='form-control' id='yearid' onchange='jsFunction(this.value);'><option value=2015-16>2015-16</option><option value=2016-17>2016-17</option></select></div>" +
            	   		
            	   "<div class='form-group'><label class='control-label'>&nbsp;&nbsp;&nbsp;&nbsp;Country</label> <select class='form-control' id='cntryid' ><option value=Select>Select</option>";
            	   
            	   
              	 
              	  
              	  var myString = country;

              	  var mySplitResult = myString.split("%");

              	  for(i = 0; i < mySplitResult.length; i++){
              		 html =html+"<option value='"+mySplitResult[i] +"'>"+mySplitResult[i] +"</option>"
     				
              	  }
            	 

            	   
            	   html =html+"</select></div>"+
            	   
            	   "<div class='form-group'><label class='control-label'>&nbsp;&nbsp;&nbsp;&nbsp;Customer Group</label> <select class='form-control' id='cgrpid' onchange='jsFunction(this.value);'><option value=Select>Select</option>";
            	   
            	   
            	 
            	   for ( var i = 0; i < json.aggregations.CGrp.buckets.length; i++) 
					{  
            		   html =html+"<option value='"+json.aggregations.CGrp.buckets[i].key+"'>"+json.aggregations.CGrp.buckets[i].key+"</option>"
					}

            	   html =html+"</select></div>"+
            	   "<div class='form-group'><label class='control-label'>&nbsp;&nbsp;&nbsp;&nbsp;Volume(in '000)</label></div>"+
            	   "<div class='input-group'>"+ 
       	        "<span class='input-group-addon'>LCY</span>"+
       	        "<input type='number' value='1000' min='0' step='0.01' data-number-to-fixed='2' data-number-stepfactor='100' class='form-control currency' id='forecastval' />"+
       	          "</div>"+
            	   "<div class='span7 text-center'><input type=button class='btn btn-primary'  value='&nbsp;&nbsp;&nbsp;&nbsp;Post Volume&nbsp;&nbsp;&nbsp;&nbsp;' onClick='postQuery()' ></div>";
        		  
        		   ///"</table>";
            	   $("#content").html(html);
            	   
                }
              });

              }


	

	













          




	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
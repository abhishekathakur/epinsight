var query2 = "";

var sin = [], sin2 = [], cos = [], pie = [],cat=[];

var lineChartData = "";

//Param=0,qstring="AMESA";

var query_Dash2 = "", query_region_Dash2 = "",query_country_Dash2= "",query_kam_Dash2= "",
	
	 query1_Dash2 = "" ,query1_region_Dash2 = "",query1_country_Dash2= "",query1_kam_Dash2= "",
	 query2_Dash2 = "" ,query2_region_Dash2 = "",query2_country_Dash2= "",query2_kam_Dash2= "", 
	 query3_Dash2 = "" ,query3_region_Dash2 = "",query3_country_Dash2= "",query3_kam_Dash2="";

var month = new Array(12);
month[1] = "Jan";
month[2] = "Feb";
month[3] = "Mar";
month[4] = "Apr";
month[5] = "May";
month[6] = "Jun";
month[7] = "Jul";
month[8] = "Aug";
month[9] = "Sep";
month[10] = "Oct";
month[11] = "Nov";
month[12] = "Dec";

function DisableCur1()
{ 
  document.getElementById("q156").checked=false;
  document.getElementById("q157").checked=true;
}
function changeCurDisplay1(pcur)
{  
   document.getElementById("cur").innerHTML=pcur;
	if(pcur=="USD")
		{
		 $('#graph1').html(mtd_usd);
		 $('#graph2').html(ytd_usd);
		 $('#diatable').html(dtd_usd);
		 $('#cattable').html(ctd_usd);
		 
		}
	else
		{
		$('#graph1').html(mtd_lcy);
		$('#graph2').html(ytd_lcy);
		$('#diatable').html(dtd_lcy);
		$('#cattable').html(ctd_lcy);
		
		}
	
}

var dashboard2 = (function() {

	//"use strict";
	
	
	
		
		
		
		
		
		function render() {
			
			var html ="";
			
			 mtd_lcy="";ytd_lcy=""; 
			 mtd_usd="";ytd_usd="";
			 dtd_usd="";dtd_lcy="";
			 ctd_usd="";ctd_lcy="";

			 html = '<fieldset><div id="headerDivImg">' 
				 +'<div id="titleTextImg"><span id="loc"></span> | <span>YTD-'+datedim+'</span> | <span id="cur"></span> | <span>(Value in 000)</span></div>' +'<a id="imageDivLink" href="javascript:toggle5()"><img src="../img/plus.png"></a>'
					+'</div>'
					+ '<div id="contentDivImg" style="display: none;"> ';
					if(param<=1)
						{
							html=html+ '<div class="row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Region :&nbsp;'
							+ '<div class="col-sm-9">'
							+ '<div class="btn-group" data-toggle="buttons">';
							if(param==0)
								{cur="USD";
								html=html+ '<label >'
								+ '    <input type="radio" id="q151" name="quality25" value="All" onChange=Changeit1("0","All") /> All'
								+ '</label> ';
								}
							
							var myString = region;

							var mySplitResult = myString.split("%");

							for(i = 0; i < mySplitResult.length; i++){
								html=html+ ' <label >'
								+ '    <input type="radio" id="q152" name="quality25" value='+mySplitResult[i] +' onChange=Changeit1("1","'+mySplitResult[i]+'") /> '+ mySplitResult[i]
								+ '</label> '
								
							    //document.write("<br /> Element " + i + " = " + mySplitResult[i]); 
							}
							if(param==1)
							{
								qstring=mySplitResult[0];
								cur="USD";
							}
							
							
		
							//html=html+' </div></div></div>'
						}
					if(param<=2)
					{
							//html=html+ '<div class="row">Country'
						//+ '<div class="col-sm-9">'
						//+ '<div class="btn-group" data-toggle="buttons">';
						html=html+ '<br>'
							var myString = country;

							var mySplitResult = myString.split("%");

							for(i = 0; i < mySplitResult.length; i++){
								html=html+ ' <label >'
								+ '    <input type="radio" id="q153" name="quality25" value='+mySplitResult[i] +' onChange=Changeit1("2","'+mySplitResult[i]+'") /> '+ mySplitResult[i]
								+ '</label> '
								
							    //document.write("<br /> Element " + i + " = " + mySplitResult[i]); 
							}
							if(param==2)
								qstring=mySplitResult[0];
							
						
	
							html=html+' </div></div></div>'
					}
					

					html=html+'<div class="row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Currency :&nbsp;'
					+ '<div class="col-sm-9">'
					+ '<div class="btn-group" data-toggle="buttons">'
					
					+ ' <label >'
					+ '    <input type="radio" id="q157" name="quality26" value="USD" onChange=ChangeCur1("USD") /> USD'
					+ ' </label> ' +

					' </div></div></div>' +

					'</div>' +
					
					

					'<div class="container">' + '<div class="row">'
					+ '<div class="col-xs-12">'
					
					+ '<div id="graph1"></div>' + '</div></div>' +

					'<div class="row">' + '<div class="col-xs-12">'
					
					+ '<div id="graph2"></div>' + '</div></div>'
					
					+ '<div class="row">'
					+'<div class="col-xs-12">'
					
					+ '<div id="diatable"></div></div></div>' 
					
					+ '<div class="row"><div class="col-xs-12">'
					
					+ '<div id="cattable"></div>' + '</div></div>' 

					+'</div>';

			$("#content").html(html);
			
			
			SelectMTSQuery_Dash2(qstring);
			MTDList_Dash2(param);
			SelectYTDQuery_Dash2(qstring);
			//alert(qstring);
			YTDList_Dash2(param);
			SelectMTRQuery_Dash2(qstring);
			MonthlyTrends_Dash2(param);
			SelectCatQuery_Dash2(qstring);
			Defect_Dash2(param);
			
		}


	


	
	
	return {
		render : render
		
	}

}());






/*Function Calling Start*/


/*Function Calling End*/

// Currently selected dashboard values
/*	
 *function QueryModify() {

query = "{" + "query: {" + "bool: {"
			+ "must: [{match: { Month_name:  amonth[mon] }}" +

			"]}}," + "'size':0," +

			"aggs: {" + "Month: {" + "  terms: {" + "field: 'Year_Name',"
			+ "size: 2," + "order: {" + "  _term: 'desc'" + "}" + "}" + ","
			+ "aggs: {" + "	1: {" + "	  sum: {" + "	field: 'Revenue'"
			+ "  }" + "}," +

			"	2: {" + "  sum: {" + "	field: 'Revenue_Plan' " + " }" + "},"
			+ "3: {" + " sum: {" + "	field: 'Sales_quantity'" + " }" + "},"
			+ "4: {" + "  sum: {" + "	field: 'Sales_Plan'" + "  }" + "},"
			+ "5: {" + "  max: {" + "	field: 'MonthYr'" + "  }" + "}" + "}"
			+

			"}" +

			"}}";

}
*/
/* MTD Query List Start */
function SelectMTSQuery_Dash2(qstring)
{
	 document.getElementById("loc").innerHTML=qstring;
	 document.getElementById("cur").innerHTML=cur;//alert(qstring);

  query_Dash2 ={ 
		  
		  query: { bool: { must: [ {match: { Year_Name : actyr }}
                                           
	 ]}
  }, 'size':0,

  aggs: {
	    Month: {
	      terms: {
	        field: 'Customer',
	        size: 10,
	        order: {
	          1: 'desc'
	        }
	      },
	      aggs: {
	        1: {
	          sum: {
	            field: 'Net_Amount'
	          }
	        },
	        3: {
	          terms: {
	            field: 'Customer_name',
	            size: 10,
	            order: {
	              1: 'desc'
	            }
	          },
	          aggs: {
	            1: {
	              sum: {
	                field: 'Net_Amount'
	              }
	            }
	          }

	  }
	 }}}}
  
  
  
  
  
  
  
  query_region_Dash2 =
  
  
  { 
		  
		  query: { bool: { must: [ {match: { Year_Name : actyr}},
                                           {match: { Region: qstring }}
                                           
	 ]}
  }, 'size':0,
	  
  aggs: {
	  Month: {
	      terms: {
	        field: 'Customer',
	        size: 10,
	        order: {
	          1: 'desc'
	        }
	      },
	      aggs: {
	        1: {
	          sum: {
	            field: 'Net_Amount'
	          }
	        },
	        3: {
	          terms: {
	            field: 'Customer_name',
	            size: 10,
	            order: {
	              1: 'desc'
	            }
	          },
	          aggs: {
	            1: {
	              sum: {
	                field: 'Net_Amount'
	              }
	            }
	          }

	  }
	 }}}}
  
  query_country_Dash2 ={ query: { bool: { must: [ {match: { Year_Name : actyr }},
                                           {match: { Country: qstring}}
                                           
	 ]}}, 'size':0,
	  
	 aggs: {
		 Month: {
		      terms: {
		        field: 'Customer',
		        size: 10,
		        order: {
		          1: 'desc'
		        }
		      },
		      aggs: {
		        1: {
		          sum: {
		            field: 'Net_Amount'
		          }
		        },
		        3: {
		          terms: {
		            field: 'Customer_name',
		            size: 10,
		            order: {
		              1: 'desc'
		            }
		          },
		          aggs: {
		            1: {
		              sum: {
		                field: 'Net_Amount'
		              }
		            }
		          }

		  }
		 }}}}
  
 
}
  /* MTD Query List End */
 /* YTD Query List */
/* MTD Query List Start */
function SelectYTDQuery_Dash2(qstring)
{
	

	  query1_Dash2 ={ 
			  
			  query: { bool: { must: [ {match: { Year_Name : actyr }}
	                                           
		 ]}
	  }, 'size':0,

	  aggs: {
		    Month: {
		      terms: {
		        field: 'Defect',
		        size: 10,
		        order: {
		          1: 'desc'
		        }
		      },
		      aggs: {
		        1: {
		          sum: {
		            field: 'Net_Amount'
		          }
		        }
		 }}}}
	  
	  
	  query1_region_Dash2 ={ query: { bool: { must: [ {match: { Year_Name : actyr }},
	                                           {match: { Region: qstring }}
	                                           
		 ]}
	  }, 
	  'size':0,
	  aggs: {
		    Month: {
		      terms: {
		        field: 'Defect',
		        size: 10,
		        order: {
		          1: 'desc'
		        }
		      },
		      aggs: {
		        1: {
		          sum: {
		            field: 'Net_Amount'
		          }
		        }
		 }}}}
	  
	  
	  query1_country_Dash2={ query: { bool: { must: [ {match: { Year_Name : actyr }},
	   	                                           {match: { Country: qstring }}
      
		 ]}
	  }, 
	  'size':0,
	  aggs: {
		    Month: {
		      terms: {
		        field: 'Defect',
		        size: 10,
		        order: {
		          1: 'desc'
		        }
		      },
		      aggs: {
		        1: {
		          sum: {
		            field: 'Net_Amount'
		          }
		        }
		 }}}}
	  
	  
	 
	}



function SelectMTRQuery_Dash2(qstring)
{

	  query2_Dash2 ={ query: { bool: { must: [ {match: { Year_Name : actyr }}
		 ]}}, 'size':0,
		  
		 aggs: {
			    Month: {
			      terms: {
			        field: 'Div_Name',
			        size: 10,
			        order: {
			          1: 'desc'
			        }
			      },
			      aggs: {
			        1: {
			          sum: {
			            field: 'Net_Amount'
			          }
			        }
			 }}}}
		  
		  
		  query2_region_Dash2 ={ query: { bool: { must: [ {match: { Year_Name : actyr }},
		                                           {match: { Region: qstring }}
		                                           
			 ]}
		  }, 
		  'size':0,
		  aggs: {
			    Month: {
			      terms: {
			        field: 'Div_Name',
			        size: 10,
			        order: {
			          1: 'desc'
			        }
			      },
			      aggs: {
			        1: {
			          sum: {
			            field: 'Net_Amount'
			          }
			        }
			 }}}}
	  
	  
	  query2_country_Dash2={ query: { bool: { must: [ {match: { Year_Name : actyr }},
		                                           {match: { Country: qstring}}
		                                           
			 ]}}, 'size':0,
			  
			 aggs: {
				    Month: {
				      terms: {
				        field: 'Div_Name',
				        size: 10,
				        order: {
				          1: 'desc'
				        }
				      },
				      aggs: {
				        1: {
				          sum: {
				            field: 'Net_Amount'
				          }
				        }
				 }}}}
		  
		  
		  
		}





function SelectCatQuery_Dash2(qstring)
{
 
	 query3_Dash2 ={

			query : {

				bool : {
					must : [ {
						match : {
							Year_Name : actyr
						}}
					

					]
				}

			},
			'size':0,

			aggs: {
				Month: {
			      terms: {
			        field: 'Defect',
			        size: 20,
			        order: {
			          _count: 'desc'
			        }
			      },
			      aggs: {
			        3: {
			          sum: {
			            field: 'Net_Amount'
			          }
			        }
			      }
			    }
			  }
			}

  
  query3_region_Dash2 =

{

	query : {

		bool : {
			must : [ {
				match : {
					Year_Name : actyr
				}},
				 {match: { Region: qstring }}
			

			]
		}

	},
	'size':0,

	aggs: {
		Month: {
	      terms: {
	        field: 'Defect',
	        size: 20,
	        order: {
	          _count: 'desc'
	        }
	      },
	      aggs: {
	        3: {
	          sum: {
	            field: 'Net_Amount'
	          }
	        }
	      }
	    }
	  }
	}
	

	query3_country_Dash2 =

	 {

	 	query : {

	 		bool : {
	 			must : [ {
	 				match : {
	 					Year_Name : actyr
	 				}},
	 				 {match: { Country: qstring }}
	 			

	 			]
	 		}

	 	},
	 	'size':0,

	 	aggs: {
	 		Month: {
			      terms: {
			        field: 'Defect',
			        size: 20,
			        order: {
			          _count: 'desc'
			        }
			      },
			      aggs: {
			        3: {
			          sum: {
			            field: 'Net_Amount'
			          }
			        }
			      }
			    }
			  }
			}
  
  


}
//	(qstring);




/* Render the dashboard */


	function MTDList_Dash2(Param)
	{     
	 ///alert("Param"+Param);
	var mtd_query="";
	 mtd_lcy="";
	 mtd_usd="";
		if(Param==1)
			mtd_query=query_region_Dash2;
		else if(Param==2)
			mtd_query=query_country_Dash2;
		else if(Param==3)
			mtd_query=query_kam_Dash2;
		else
			mtd_query=query_Dash2;
		
	$.ajax({
				url : 'http://192.168.10.142:9200/.cqpqexternal/_search',
				dataType : 'json',
				type : 'POST',
				contentType : 'application/json',
				crossDomain : true,
				data : JSON.stringify(mtd_query),
				// data: {"search": search_term},+ '<div class="title"></div>'
				success : function(json) {
					var rev = "<table ><caption>Customer(Top 10)</caption><thead><tr><th>Customer Code</th><th>Customer Name</th><th>Amount</th></tr></thhead><tbody>";
					//var qnt = "<tr><td>Quantity:</td><td>";
					var innerTable="";
					var innerTable_Lcy="";
					var first_act = 0, sec_act = 0, first_qnt = 0, sec_qnt = 0;
					// alert(""+JSON.parse(data.hits.hits.count));
					// $("#results").empty();
					// $("#results").append("<p>Results for <b>" +
					// $("#searchterm").val() + "</b></p>");
					// alert(json.aggregations[1].value);
					/*
					 * $('#graph1').html("<table ><tr><td></td><td>Actual</td><td>Planned</td></tr>"+ "<tr><td>Revenue:</td><td>"+json.aggregations[1].value.toFixed(0)+"</td><td>"+json.aggregations[2].value.toFixed(0)+"</td></tr>"+ "<tr><td>Quantity:</td><td>"+json.aggregations[3].value.toFixed(0)+"</td><td>"+json.aggregations[4].value.toFixed(0)+"</td></tr>"+ "</table>" );
					 * 
					 */

					for ( var i = 0; i < json.aggregations.Month.buckets.length; i++) 
					{  var cls="even";
					     if(i%2==0)
					    	 cls="odd";
							
							innerTable=innerTable+"<tr class="+cls+"><td align=left>"
								    + json.aggregations.Month.buckets[i].key
								    + "</td><td align=left>"+ json.aggregations.Month.buckets[i][3].buckets[0].key+"<td align=right>"
									
									+ numeral(json.aggregations.Month.buckets[i][1].value
											.toFixed(0)/1000).format('0,0') + "</td>";

							
							

						

					}
					mtd_usd = rev + innerTable+"</tbody></table>";

					///mtd_lcy = rev + innerTable_Lcy+"</tbody></table>";
					
					$('#graph1').html(mtd_usd);
					
					
					/*
                   if(cur=="USD")
                	   {
					   $('#graph1').html(mtd_usd);
                	   }
                   else
                	   {
                	    
                	   $('#graph1').html(mtd_lcy);
                	   }
					
					*/

				}
			});
	}
	
	
	function YTDList_Dash2(Param)
	{
		
		var ytd_query="";
		 ytd_lcy="";
		 ytd_usd="";
		if(Param==1)
			ytd_query=query1_region_Dash2;
		else if(Param==2)
			ytd_query=query1_country_Dash2;
		else if(Param==3)
			ytd_query=query1_kam_Dash2;
		else
			ytd_query=query1_Dash2;
		
		//alert(ytd_query);

		$.ajax({
			url : 'http://192.168.10.142:9200/.cqpqexternal/_search',
			dataType : 'json',
			type : 'POST',
			contentType : 'application/json',
			crossDomain : true,
			data : JSON.stringify(ytd_query),
			// data: {"search": search_term},+ '<div class="title"></div>'
			success : function(json) {
				var rev = "<table ><caption>Defects(Top 10)</caption><thead><tr><th>Defect Desc</th><th>Amount</th></tr></thhead><tbody>";
				//var qnt = "<tr><td>Quantity:</td><td>";
				var innerTable="";
				var innerTable_Lcy="";
				var first_act = 0, sec_act = 0, first_qnt = 0, sec_qnt = 0;
				// alert(""+JSON.parse(data.hits.hits.count));
				// $("#results").empty();
				// $("#results").append("<p>Results for <b>" +
				// $("#searchterm").val() + "</b></p>");
				// alert(json.aggregations[1].value);
				/*
				 * $('#graph1').html("<table ><tr><td></td><td>Actual</td><td>Planned</td></tr>"+ "<tr><td>Revenue:</td><td>"+json.aggregations[1].value.toFixed(0)+"</td><td>"+json.aggregations[2].value.toFixed(0)+"</td></tr>"+ "<tr><td>Quantity:</td><td>"+json.aggregations[3].value.toFixed(0)+"</td><td>"+json.aggregations[4].value.toFixed(0)+"</td></tr>"+ "</table>" );
				 * 
				 */

				for ( var i = 0; i < json.aggregations.Month.buckets.length; i++) 
				{  var cls="even";
				     if(i%2==0)
				    	 cls="odd";
						
						innerTable=innerTable+"<tr class="+cls+"><td align=left>"
							    + json.aggregations.Month.buckets[i].key
							    + "</td><td align=right>"
								
								+ numeral(json.aggregations.Month.buckets[i][1].value
										.toFixed(0)/1000).format('0,0') + "</td>";

						
						

					

				}
				ytd_usd = rev + innerTable+"</tbody></table>";

				///mtd_lcy = rev + innerTable_Lcy+"</tbody></table>";
				
				$('#graph2').html(ytd_usd);
				
				
				/*
               if(cur=="USD")
            	   {
				   $('#graph1').html(mtd_usd);
            	   }
               else
            	   {
            	    
            	   $('#graph1').html(mtd_lcy);
            	   }
				
				*/

			}
		});
}
	
	
	
	function MonthlyTrends_Dash2(Param)
	{
		
		var mtr_query="";
		 dtd_lcy="";
		 dtd_usd="";
		
		if(Param==1)
			mtr_query=query2_region_Dash2;
		else if(Param==2)
			mtr_query=query2_country_Dash2;
		else if(Param==3)
			mtr_query=query2_kam_Dash2;
		else
			mtr_query=query2_Dash2;

		$
		.ajax({
			url : 'http://192.168.10.142:9200/.cqpqexternal/_search',
			dataType : 'json',
			type : 'POST',
			contentType : 'application/json',
			crossDomain : true,
			data : JSON.stringify(mtr_query),
			// data: {"search": search_term},
			success : function(json) {
				var rev = "<table ><caption>Division Wise </caption><thead><tr><th>Div Desc</th><th>Amount</th></tr></thhead><tbody>";
				//var qnt = "<tr><td>Quantity:</td><td>";
				var innerTable="";
				var innerTable_Lcy="";
				var first_act = 0, sec_act = 0, first_qnt = 0, sec_qnt = 0;
				// alert(""+JSON.parse(data.hits.hits.count));
				// $("#results").empty();
				// $("#results").append("<p>Results for <b>" +
				// $("#searchterm").val() + "</b></p>");
				// alert(json.aggregations[1].value);
				/*
				 * $('#graph1').html("<table ><tr><td></td><td>Actual</td><td>Planned</td></tr>"+ "<tr><td>Revenue:</td><td>"+json.aggregations[1].value.toFixed(0)+"</td><td>"+json.aggregations[2].value.toFixed(0)+"</td></tr>"+ "<tr><td>Quantity:</td><td>"+json.aggregations[3].value.toFixed(0)+"</td><td>"+json.aggregations[4].value.toFixed(0)+"</td></tr>"+ "</table>" );
				 * 
				 */

				for ( var i = 0; i < json.aggregations.Month.buckets.length; i++) 
				{  var cls="even";
				     if(i%2==0)
				    	 cls="odd";
						
						innerTable=innerTable+"<tr class="+cls+"><td align=left>"
							    + json.aggregations.Month.buckets[i].key
							    + "</td><td align=right>"
								
								+ numeral(json.aggregations.Month.buckets[i][1].value
										.toFixed(0)/1000).format('0,0') + "</td>";

						
						

					

				}
				

				///mtd_lcy = rev + innerTable_Lcy+"</tbody></table>";
				dtd_usd = rev + innerTable+"</tbody></table>";
			

				 $('#diatable').html(dtd_usd);
				/*
				if(cur=="USD")
         	   {
				   $('#diatable').html(dtd_usd);
         	   }
            else
         	   {
         	    
         	      $('#diatable').html(dtd_lcy);
         	   }
				*/
			}
		});
	}
	
	
	function Defect_Dash2(Param)
	{
		
		var mtr_query="";
		 ctd_lcy="";
		 ctd_usd="";
		
		if(Param==1)
			mtr_query=query3_region_Dash2;
		else if(Param==2)
			mtr_query=query3_country_Dash2;
		else
			mtr_query=query3_Dash2;

		$
		.ajax({
			url : 'http://192.168.10.142:9200/.cqpqexternal/_search',
			dataType : 'json',
			type : 'POST',
			contentType : 'application/json',
			crossDomain : true,
			data : JSON.stringify(mtr_query),
			// data: {"search": search_term},
			success : function(json) {
				var rev = "<table ><caption>Defect Occurance(Top 20)</caption><thead><tr><th>Defect</th><th>Count</th><th>Amount</th></tr></thhead><tbody>";
				//var qnt = "<tr><td>Quantity:</td><td>";
				var innerTable="";
				var innerTable_Lcy="";
				var first_act = 0, sec_act = 0, first_qnt = 0, sec_qnt = 0;
				// alert(""+JSON.parse(data.hits.hits.count));
				// $("#results").empty();
				// $("#results").append("<p>Results for <b>" +
				// $("#searchterm").val() + "</b></p>");
				// alert(json.aggregations[1].value);
				/*
				 * $('#graph1').html("<table ><tr><td></td><td>Actual</td><td>Planned</td></tr>"+ "<tr><td>Revenue:</td><td>"+json.aggregations[1].value.toFixed(0)+"</td><td>"+json.aggregations[2].value.toFixed(0)+"</td></tr>"+ "<tr><td>Quantity:</td><td>"+json.aggregations[3].value.toFixed(0)+"</td><td>"+json.aggregations[4].value.toFixed(0)+"</td></tr>"+ "</table>" );
				 * 
				 */

				for ( var i = 0; i < json.aggregations.Month.buckets.length; i++) 
				{  var cls="even";
				     if(i%2==0)
				    	 cls="odd";
						
						innerTable=innerTable+"<tr class="+cls+"><td align=left>"
							    + json.aggregations.Month.buckets[i].key
							    + "</td><td align=right>"
							    + json.aggregations.Month.buckets[i].doc_count
							    + "</td><td align=right>"
								+ numeral(json.aggregations.Month.buckets[i][3].value
										.toFixed(0)/1000).format('0,0') + "</td>";

						
						

					

				}
				

				///mtd_lcy = rev + innerTable_Lcy+"</tbody></table>";
				dtd_usd = rev + innerTable+"</tbody></table>";
			

				 $('#cattable').html(dtd_usd);
				/*
				if(cur=="USD")
         	   {
				   $('#diatable').html(dtd_usd);
         	   }
            else
         	   {
         	    
         	      $('#diatable').html(dtd_lcy);
         	   }
				*/
			}
		});
	}
	

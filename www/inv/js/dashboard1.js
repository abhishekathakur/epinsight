var query2 = "";

var sin = [], sin2 = [], cos = [], pie = [],cat=[],cat_lcy=[],sin2_lcy = [], cos_lcy = [];


var piechartData = "";

var subamt=0;subqnt=0,subamt_lcy=0,subqnt_lcy=0;
var totsubamt=0;totsubqnt=0,totsubamt_lcy=0,totsubqnt_lcy=0;
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

function DisableCur2()
{ 
  document.getElementById("q156").checked=false;
  document.getElementById("q157").checked=true;
}
function changeCurDisplay2(pcur)
{  
   document.getElementById("cur").innerHTML=pcur;
	if(pcur=="USD")
		{
		 $('#invtable').html(mtd_usd);
		
		  BudgetBarChart();
		}
	else
		{
		$('#invtable').html(mtd_lcy);
		
		BudgetBarChart();
		}
	
}

var dashboard1 = (function() {

	//"use strict";
	
	
	
		
		
		
		
		
		function render() {
			
			var html ="";
			
			 mtd_lcy="";ytd_lcy=""; 
			 mtd_usd="";ytd_usd="";
			 dtd_usd="";dtd_lcy="";
			 ctd_usd="";ctd_lcy="";

			 html = '<fieldset><div id="headerDivImg">' 
				 +'<div id="titleTextImg"><span id="loc"></span> | <span>'+actyr+'</span> | <span id="cur"></span> | <span>(Value in 000)</span></div>' +'<a id="imageDivLink" href="javascript:toggle5()"><img src="../img/plus.png"></a>'
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
								+ '    <input type="radio" id="q151" name="quality25" value="All" onChange=Changeit2("0","All") /> All'
								+ '</label> ';
								}
							
							var myString = region;

							var mySplitResult = myString.split("%");

							for(i = 0; i < mySplitResult.length; i++){
								html=html+ ' <label >'
								+ '    <input type="radio" id="q152" name="quality25" value='+mySplitResult[i] +' onChange=Changeit2("1","'+mySplitResult[i]+'") /> '+ mySplitResult[i]
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
								+ '    <input type="radio" id="q153" name="quality25" value='+mySplitResult[i] +' onChange=Changeit2("2","'+mySplitResult[i]+'") /> '+ mySplitResult[i]
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
					+ ' <label ">'
					+ '    <input type="radio" id="q156" name="quality26" value="LCY" onChange=ChangeCur2("LCY") /> LCY'
					+ '</label> '
					+ ' <label >'
					+ '    <input type="radio" id="q157" name="quality26" value="USD" onChange=ChangeCur2("USD") /> USD'
					+ ' </label> ' +

					

					' </div></div></div>' +

					'</div>' +
					
					

					'<div class="container">' + 

					'<div class="row">' + '<div class="col-xs-12">'
					
					+ '<div id="invtable"></div>' + '</div></div>'
					
                    + '<div class="title"><table ><caption>'+amonth[mon]+' :Month Inv. Trend</caption></table></div>'
					
					+ '<div style="width:100%;height:350" >' + '<div>'
					+ '<canvas id="canvas" height="350" width="600"></canvas>'
					+ '</div>' + '<div id="legendDiv" class="chart-legend"></div>' + '</div>'  
					
				 
					

					'</div>';


			$("#content").html(html);
			
			
			SelectMTSQuery_Dash4(qstring);
			MTDList_Dash4(param);
			
			
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
function SelectMTSQuery_Dash4(qstring)
{
	 document.getElementById("loc").innerHTML=qstring;
	 document.getElementById("cur").innerHTML=cur;//alert(qstring);
	

	  query_Dash1 ={ 
			  
			  query: { bool: { must: [ {match: { Year_Name : actyr }}
	                                           
		 ]}
	  }, 'size':0,

	  aggs: {
		  Mat: {
		      terms: {
		        field: 'Mat_Type',
		        size: 6,
		        order: {
		          1: 'desc'
		        }
		      },
		      aggs: {
		        1: {
		          sum: {
		            field: 'Amount'
		          }
		        },
		        4: {
		          terms: {
		            field: 'Mat_Type_Desc',
		            size: 6,
		            order: {
		              1: 'desc'
		            }
		          },
		          aggs: {
		            1: {
		              sum: {
		                field: 'Amount'
		              }
		            },
		            Month: {
		              terms: {
		                field: 'MonthYr',
		                size: 3,
		                order : {
							_term : 'desc'
						}
		              },
		              aggs: {
		                1: {
		                  sum: {
		                    field: 'Amount'
		                  }
		                },
		                2: {
		                  sum: {
		                    field: 'Budget'
		                  }
		                },
		                4: {
		                      avg: {
		                        field: 'ExchRate'
		                      }
		                    }
		              }
		            }
		          }
		        }
		      }
		    }
		  }
		}


  query_region_Dash1 =
  
  
  { 
		  
		  query: { bool: { must: [ {match: { Year_Name : actyr}},
                                    {match: { Region: qstring }}
                                           
	 ]}
  }, 'size':0,
	  
  aggs: {
	  Mat: {
	      terms: {
	        field: 'Mat_Type',
	        size: 6,
	        order: {
	          1: 'desc'
	        }
	      },
	      aggs: {
	        1: {
	          sum: {
	            field: 'Amount'
	          }
	        },
	        4: {
	          terms: {
	            field: 'Mat_Type_Desc',
	            size: 6,
	            order: {
	              1: 'desc'
	            }
	          },
	          aggs: {
	            1: {
	              sum: {
	                field: 'Amount'
	              }
	            },
	            Month: {
	              terms: {
	                field: 'MonthYr',
	                size: 3,
	                order : {
						_term : 'desc'
					}
	              },
	              aggs: {
	                1: {
	                  sum: {
	                    field: 'Amount'
	                  }
	                },
	                2: {
	                  sum: {
	                    field: 'Budget'
	                  }
	                },
	                4: {
	                      avg: {
	                        field: 'ExchRate'
	                      }
	                    }
	              }
	            }
	          }
	        }
	      }
	    }
	  }
	}

  
  query_country_Dash1 ={ query: { bool: { must: [{match: { Year_Name : actyr }},
                                           {match: { Country: qstring}}
                                           
	 ]}}, 'size':0,
	  
	 aggs: {
		  Mat: {
		      terms: {
		        field: 'Mat_Type',
		        size: 6,
		        order: {
		          1: 'desc'
		        }
		      },
		      aggs: {
		        1: {
		          sum: {
		            field: 'Amount'
		          }
		        },
		        4: {
		          terms: {
		            field: 'Mat_Type_Desc',
		            size: 6,
		            order: {
		              1: 'desc'
		            }
		          },
		          aggs: {
		            1: {
		              sum: {
		                field: 'Amount'
		              }
		            },
		            Month: {
		              terms: {
		                field: 'MonthYr',
		                size: 3,
		                order : {
							_term : 'desc'
						}
		              },
		              aggs: {
		                1: {
		                  sum: {
		                    field: 'Amount'
		                  }
		                },
		                2: {
		                  sum: {
		                    field: 'Budget'
		                  }
		                },
		                4: {
		                      avg: {
		                        field: 'ExchRate'
		                      }
		                    }
		              }
		            }
		          }
		        }
		      }
		    }
		  }
		}

 
}
 
//	(qstring);




/* Render the dashboard */


	function MTDList_Dash4(Param)
	{     
	 ///alert("Param"+Param);
	var mtd_query="";

	 mtd_lcy="";
	 mtd_usd="";
		if(Param==1)
			mtd_query=query_region_Dash1;
		else if(Param==2)
			mtd_query=query_country_Dash1;
	
		else
			mtd_query=query_Dash1;
		
	$.ajax({
				url : 'http://192.168.10.142:9200/.inventory/_search',
				dataType : 'json',
				type : 'POST',
				contentType : 'application/json',
				crossDomain : true,
				data : JSON.stringify(mtd_query),
				// data: {"search": search_term},+ '<div class="title"></div>'
				success : function(json) {
					var rev = "<table ><caption>3 Months Inventory Details </caption><thead><tr><th>Mat.Type</th><th>Desc</th>" ;
							//"<th>Apr</th><th>May</th><th>Jun</th><th>Jul</th><th>Aug</th><th>Sep</th>" +
							//"<th>Oct</th><th>Nov</th><th>Dec</th><th>Jan</th><th>Feb</th><th>Mar</th></tr></thead><tbody>";
					       // "<th>Feb</th><th></th><th>Jan</th></tr></thead><tbody>";
					
						var monRow="";
					    var firsttot=0;
					    var secondtot=0;
					    var thirdtot=0;
					    var firsttot_budg=0;
					    var secondtot_budg=0;
					    var thirdtot_budg=0;
					//var qnt = "<tr><td>Quantity:</td><td>";
					var innerTable="";
					var innerTable_lcy="";
					var first_act = 0, sec_act = 0, first_qnt = 0, sec_qnt = 0;
					subamt=0;subqnt=0;
					subamt_lcy=0;subqnt_lcy;
					totsubamt=0;totsubqnt=0;
					totsubamt_lcy=0;totsubqnt_lcy=0;
				
					// alert(""+JSON.parse(data.hits.hits.count));
					// $("#results").empty();
					// $("#results").append("<p>Results for <b>" +
					// $("#searchterm").val() + "</b></p>");
					// alert(json.aggregations[1].value);
					/*
					 * $('#graph1').html("<table ><tr><td></td><td>Actual</td><td>Planned</td></tr>"+ "<tr><td>Revenue:</td><td>"+json.aggregations[1].value.toFixed(0)+"</td><td>"+json.aggregations[2].value.toFixed(0)+"</td></tr>"+ "<tr><td>Quantity:</td><td>"+json.aggregations[3].value.toFixed(0)+"</td><td>"+json.aggregations[4].value.toFixed(0)+"</td></tr>"+ "</table>" );
					 * 
					 */
                    var tkey="";
                    
					for ( var i = 0; i < json.aggregations.Mat.buckets.length; i++) 
					{  
						var pkey=json.aggregations.Mat.buckets[i].key;
							
						 sin.push(pkey);
							
							
                            for ( var j = 0; j < json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets.length; j++) 
                            	{
                            		var cls="even";
                            		if(j%2==0)
                            			cls="odd";
                            		
                            		
                            		var deno=json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j][4].value.toFixed(4)*1000;
                            		
                            		if(deno==0)
                            			deno=1000;
                            		
                            		
                            	
                            		
                            		
                            			if(tkey!=pkey)
                            				{
                            				
                            				if(pkey.length>1)
                            					{
                            					 innerTable=innerTable+"</tr>";
                            					 innerTable_lcy=innerTable_lcy+"</tr>";
                            					}
                            				
                            				innerTable=innerTable+"<tr class="+cls+"><td align=left>"
        								    + json.aggregations.Mat.buckets[i].key
        								    + "</td><td align=left>"
        									
        								    + json.aggregations.Mat.buckets[i][4].buckets[0].key
        									+ "</td>"
        									
        									innerTable_lcy=innerTable_lcy+"<tr class="+cls+"><td align=left>"
        								    + json.aggregations.Mat.buckets[i].key
        								    + "</td><td align=left>"
        									
        								    + json.aggregations.Mat.buckets[i][4].buckets[0].key
        									+ "</td>"
                            				
                            				}
                            			
                            			
                            		
									
									//month details
                            		   if(pkey=="ZROH")
                            			   {
                            			    monRow=monRow + "<th>"+month[parseInt(json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j].key_as_string.substring(5, 7))]
											+ "</th>"
                            			   }
										
                            			///if(parseInt(json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j].key_as_string.substring(5, 7))
                            			
                            			
										innerTable=innerTable+"<td align=right>"
											+ numeral((json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j][1].value)
													/ deno).format('0,0')
												+ "</td>";
										
										
                            		
                            		if(j==0)
                            			{
                            				firsttot=eval(firsttot+json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j][1].value.toFixed(0)/deno);
                            				firsttot_budg=eval(firsttot_budg+json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j][2].value.toFixed(0)/deno);
                            				
                            				firsttot_lcy=eval(firsttot+json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j][1].value.toFixed(0)/1000);
                            				firsttot_budg_lcy=eval(firsttot_budg+json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j][2].value.toFixed(0)/1000);
                            			
                            			   sin2.push((json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j][1].value.toFixed(0)/deno));
                        			       cos.push((json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j][2].value.toFixed(0)/deno));
                            			
											sin2_lcy.push((json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j][1].value.toFixed(0)/1000));
											cos_lcy.push((json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j][2].value.toFixed(0)/1000));
	
                            			
                            			}
                            		else if(j==1)
                        			{
                            			secondtot=eval(secondtot+json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j][1].value.toFixed(0)/deno);
                            			secondtot_budg=eval(secondtot_budg+json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j][2].value.toFixed(0)/deno);
                            			
                            			secondtot_lcy=eval(secondtot+json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j][1].value.toFixed(0)/1000);
                            			secondtot_budg_lcy=eval(secondtot_budg+json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j][2].value.toFixed(0)/1000);
                                    
                        			}	
                            		else if(j==2)
                        			{
                            			thirdtot=eval(thirdtot+json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j][1].value.toFixed(0)/deno);
                            			thirdtot_budg=eval(thirdtot_budg+json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j][2].value.toFixed(0)/deno);
                                    	
                            			thirdtot_lcy=eval(thirdtot+json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j][1].value.toFixed(0)/1000);
                            			thirdtot_budg_lcy=eval(thirdtot_budg+json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j][2].value.toFixed(0)/1000);
                                    	
                        			
                        			}	
                            	
                            			
									
                            		 innerTable_lcy=innerTable_lcy+ "<td align=right>"
											+numeral(json.aggregations.Mat.buckets[i][4].buckets[0].Month.buckets[j][1].value.toFixed(0)/1000).format('0,0')
												+ "</td>";
                            	
                            			
                            			
                                		
                            			tkey=json.aggregations.Mat.buckets[i].key;
                            			
                            			
                            			/* Chart Data */
                            			
                            			
        						        
                            	}
						

					}
					
					innerTable=innerTable+"</tr>";
					
			


				
				
				
                   innerTable_lcy=innerTable_lcy+"</tr>";
				
				
					
					mtd_usd = rev + monRow + "</tr></thead><tbody><b>" + innerTable + "</b><tr class=total><td colspan=2 align=center><b>Total</b></td><td align=right><b>"+ numeral(firsttot.toFixed(0)).format('0,0') + "</b></td><td align=right><b>" +  numeral(secondtot.toFixed(0)).format('0,0') + "</b></td><td align=right><b>" +  numeral(thirdtot.toFixed(0)).format('0,0') + "</b></td></tr>" +
					"<tr class=total><td colspan=2 align=center><b>Budget</b></td><td align=right><b>"+ numeral(firsttot_budg.toFixed(0)).format('0,0') + "</b></td><td align=right><b>" +  numeral(secondtot_budg.toFixed(0)).format('0,0') + "</b></td><td align=right><b>" +  numeral(thirdtot_budg.toFixed(0)).format('0,0') + "</b></td></tr>"+
					"</tbody></table>";
					
					
					
					

					mtd_lcy =  rev +monRow+ "</tr></thead><tbody><b>" + innerTable_lcy + "</b><tr class=total><td colspan=2 align=center><b>Total</b></td><td align=right><b>"+ numeral(firsttot_lcy.toFixed(0)).format('0,0') + "</b></td><td align=right><b>" +  numeral(secondtot_lcy.toFixed(0)).format('0,0') + "</b></td><td align=right><b>" +  numeral(thirdtot_lcy.toFixed(0)).format('0,0') + "</b></td></tr>" +
					"<tr class=total><td colspan=2 align=center><b>Budget</b></td><td align=right><b>"+ numeral(firsttot_budg_lcy.toFixed(0)).format('0,0') + "</b></td><td align=right><b>" +  numeral(secondtot_budg_lcy.toFixed(0)).format('0,0') + "</b></td><td align=right><b>" +  numeral(thirdtot_budg_lcy.toFixed(0)).format('0,0') + "</b></td></tr>"+
					"</tbody></table>";
					
					
					
					
					
                   if(cur=="USD")
                	   {
					   $('#invtable').html(mtd_usd);
                	   }
                   else
                	   {
                	    
                	   $('#invtable').html(mtd_lcy);
                	   }
					
                   BudgetBarChart() 

				}
			});
	}
	
	
	function BudgetBarChart() {
		collectdata();
		var ctx = document.getElementById("canvas").getContext("2d");
		var myLine = new Chart(ctx).Bar(piechartdata, {
			responsive : true
		});

		document.getElementById("legendDiv").innerHTML = myLine
				.generateLegend();
	}
	
	
function collectdata() 
{
		var dta=cos;
		var dts_pln=sin2;
      if(cur=="USD")
    	  {
    	  dta=cos;
    	  dts_pln=sin2;
    	  }
      else
    	  {
    	  dta=cos_lcy;
    	  dts_pln=sin2_lcy;
    	  
    	  
    	  }
      
      piechartdata = {
			labels : sin,
			datasets : [ {
				label : "Planned",
				fillColor : "rgba(140,55,155,1)",
				strokeColor : "rgba(140,55,155,1)",
				pointColor : "rgba(140,55,155,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				data : dts_pln
			}, {
				label : "Actual",
				fillColor : "rgba(151,167,205,1)",
				strokeColor : "rgba(151,167,205,1)",
				pointColor : "rgba(151,167,205,1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(151,187,205,1)",
				data : dta
			} ]

		}

	}


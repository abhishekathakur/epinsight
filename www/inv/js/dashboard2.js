var query2 = "";

var sin = [], sin2 = [], cos = [], pie = [],cat=[];

var lineChartData = "";
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
		
		 
		}
	else
		{
		$('#graph1').html(mtd_lcy);
		
		
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
				 +'<div id="titleTextImg"><span id="loc"></span> | <span>'+datedim+'</span> | <span id="cur"></span> | <span>(Value in 000)</span></div>' +'<a id="imageDivLink" href="javascript:toggle5()"><img src="../img/plus.png"></a>'
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
					+ ' <label ">'
					+ '    <input type="radio" id="q156" name="quality26" value="LCY" onChange=ChangeCur1("LCY") /> LCY'
					+ '</label> '
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
		  
		  query: { bool: { must: [ {match: { Month_Name: amonth[mon]}},{match: { Year_Name : actyr }}
                                           
	 ]}
  }, 'size':0,

  aggs: {
	    Month: {
	      terms: {
	        field: 'Mat_Type',
	        size: 10,
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
	            size: 10,
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
	            MGrp: {
	              terms: {
	                field: 'Mat_Group',
	                size: 100,
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
	                6: {
	                  terms: {
	                    field: 'Mat_Group_Desc',
	                    size: 100,
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
	                    3: {
	                      sum: {
	                        field: 'Quantity'
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
  }
  
  
  query_region_Dash2 =
  
  
  { 
		  
		  query: { bool: { must: [ {match: { Month_Name: amonth[mon]}},{match: { Year_Name : actyr}},
                                           {match: { Region: qstring }}
                                           
	 ]}
  }, 'size':0,
	  
  aggs: {
	    Month: {
	      terms: {
	        field: 'Mat_Type',
	        size: 10,
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
	            size: 10,
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
	            MGrp: {
	              terms: {
	                field: 'Mat_Group',
	                size: 100,
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
	                6: {
	                  terms: {
	                    field: 'Mat_Group_Desc',
	                    size: 100,
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
	                    3: {
	                      sum: {
	                        field: 'Quantity'
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
}

  
  query_country_Dash2 ={ query: { bool: { must: [ {match: { Month_Name: amonth[mon]}},{match: { Year_Name : actyr }},
                                           {match: { Country: qstring}}
                                           
	 ]}}, 'size':0,
	  
	 aggs: {
		    Month: {
		      terms: {
		        field: 'Mat_Type',
		        size: 10,
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
		            size: 10,
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
		            MGrp: {
		              terms: {
		                field: 'Mat_Group',
		                size: 100,
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
		                6: {
		                  terms: {
		                    field: 'Mat_Group_Desc',
		                    size: 100,
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
		                    3: {
		                      sum: {
		                        field: 'Quantity'
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
				url : 'http://192.168.10.142:9200/.inventory/_search',
				dataType : 'json',
				type : 'POST',
				contentType : 'application/json',
				crossDomain : true,
				data : JSON.stringify(mtd_query),
				// data: {"search": search_term},+ '<div class="title"></div>'
				success : function(json) {
					var rev = "<table ><caption>Inventory Details</caption><thead><tr><th>Mat.Type</th><th>Desc</th><th>Mat.Grp.</th><th>Desc</th><th>Qnty.</th><th>Amt.</th></tr></thead><tbody>";
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
                    
					for ( var i = 0; i < json.aggregations.Month.buckets.length; i++) 
					{  
						var pkey=json.aggregations.Month.buckets[i][4].buckets[0].key;
							

							
							
                            for ( var j = 0; j < json.aggregations.Month.buckets[i][4].buckets[0].MGrp.buckets.length; j++) 
                            	{
                            		var cls="even";
                            		if(j%2==0)
                            			cls="odd";
                            		
                            		
                            		var deno=json.aggregations.Month.buckets[i][4].buckets[0].MGrp.buckets[j][6].buckets[0][4].value.toFixed(4)*1000;
                            		
                            		if(deno==0)
                            			deno=1000;
                            		
                            		
                            	
                            		
                            		if(tkey!="")
                            			{
                            			if(tkey!=pkey)
                            				{
                            				
                            				innerTable=innerTable+"<tr class=total><td align=left colspan=4><b>Sub Total</b>"
        								    
        										+ "</td><td align=right><b>"
        										
        										 + numeral(subamt.toFixed(0)).format('0,0')
        											+ "</b></td><td align=right><b>"
        											+ numeral(subqnt.toFixed(0)).format('0,0')
        												+ "</b></td></tr>";
                            				
                            				innerTable_lcy=innerTable_lcy+"<tr class=total><td align=left colspan=4><b>Sub Total</b>"
        								    
    										+ "</td><td align=right><b>"
    										
    										 + numeral(subamt_lcy.toFixed(0)).format('0,0')
    											+ "</b></td><td align=right>"
    											+ numeral(subqnt_lcy.toFixed(0)).format('0,0')
    												+ "</b></td></tr>";
                            				
                            				subqnt=0;
                            				subamt=0;
                            				subqnt_lcy=0;
                            				subamt_lcy=0;
                            				
                            				}
                            			
                            			}
                            		innerTable=innerTable+"<tr class="+cls+"><td align=left>"
								    + json.aggregations.Month.buckets[i].key
								    + "</td><td align=left>"
									
								    + json.aggregations.Month.buckets[i][4].buckets[0].key
									+ "</td><td align=left>"
									
									 + json.aggregations.Month.buckets[i][4].buckets[0].MGrp.buckets[j].key
										+ "</td><td align=left>"
                            		
                            		 + json.aggregations.Month.buckets[i][4].buckets[0].MGrp.buckets[j][6].buckets[0].key
										+ "</td><td align=right>"
										
										 + numeral((json.aggregations.Month.buckets[i][4].buckets[0].MGrp.buckets[j][6].buckets[0][3].value)
											/	deno).format('0,0')
											+ "</td><td align=right>"
											+ numeral((json.aggregations.Month.buckets[i][4].buckets[0].MGrp.buckets[j][6].buckets[0][1].value)
													/ deno).format('0,0')
												+ "</td></tr>";
                            		
                            		
                            		subamt=Number(subamt)+Number(json.aggregations.Month.buckets[i][4].buckets[0].MGrp.buckets[j][6].buckets[0][3].value
											/deno);
                            		
                            		subqnt=Number(subqnt)+Number(json.aggregations.Month.buckets[i][4].buckets[0].MGrp.buckets[j][6].buckets[0][1].value
											/ deno);
                            		
                            		totsubamt=Number(totsubamt)+Number(json.aggregations.Month.buckets[i][4].buckets[0].MGrp.buckets[j][6].buckets[0][3].value
											/deno);
                            		
                            		totsubqnt=Number(totsubqnt)+Number(json.aggregations.Month.buckets[i][4].buckets[0].MGrp.buckets[j][6].buckets[0][1].value
											/ deno);
                            		
                            		
                            			innerTable_lcy=innerTable_lcy+"<tr class="+cls+"><td align=left>"
								    + json.aggregations.Month.buckets[i].key
								    + "</td><td align=left>"
									
								    + json.aggregations.Month.buckets[i][4].buckets[0].key
									+ "</td><td align=left>"
									
									 + json.aggregations.Month.buckets[i][4].buckets[0].MGrp.buckets[j].key
										+ "</td><td align=left>"
                            		
                            		 + json.aggregations.Month.buckets[i][4].buckets[0].MGrp.buckets[j][6].buckets[0].key
										+ "</td><td align=right>"
										
										 + numeral(json.aggregations.Month.buckets[i][4].buckets[0].MGrp.buckets[j][6].buckets[0][3].value.toFixed(0)/1000).format('0,0')
											+ "</td><td align=right>"
											+numeral(json.aggregations.Month.buckets[i][4].buckets[0].MGrp.buckets[j][6].buckets[0][1].value.toFixed(0)/1000).format('0,0')
												+ "</td></tr>";
                            	
                            			
                            			subamt_lcy=Number(subamt_lcy)+Number(json.aggregations.Month.buckets[i][4].buckets[0].MGrp.buckets[j][6].buckets[0][3].value
    											/1000);
                                		
                                		subqnt_lcy=Number(subqnt_lcy)+Number(json.aggregations.Month.buckets[i][4].buckets[0].MGrp.buckets[j][6].buckets[0][1].value
    											/ 1000);
                                		
                                		totsubamt_lcy=Number(totsubamt_lcy)+Number(json.aggregations.Month.buckets[i][4].buckets[0].MGrp.buckets[j][6].buckets[0][3].value
    											/1000);
                                		
                                		totsubqnt_lcy=Number(totsubqnt_lcy)+Number(json.aggregations.Month.buckets[i][4].buckets[0].MGrp.buckets[j][6].buckets[0][1].value
    											/ 1000);
                                		
                            			tkey=json.aggregations.Month.buckets[i][4].buckets[0].key;
                            	}
						

					}
					
					innerTable=innerTable+"<tr class=total><td align=left colspan=4><b>Sub Total</b>"
				    
					+ "</td><td align=right><b>"
					
					 + numeral(subamt.toFixed(0)).format('0,0')
						+ "</b></td><td align=right><b>"
						+ numeral(subqnt.toFixed(0)).format('0,0')
							+ "</b></td></tr>";
					
					
                innerTable=innerTable+"<tr class=total><td align=left colspan=4><b>Total</b>"
				    
					+ "</td><td align=right><b>"
					
					 + numeral(totsubamt.toFixed(0)).format('0,0')
						+ "</b></td><td align=right><b>"
						+ numeral(totsubqnt.toFixed(0)).format('0,0')
							+ "</b></td></tr>";


				
				innerTable_lcy=innerTable_lcy+"<tr class=total><td align=left colspan=4><b>Sub Total</b>"
			    
				+ "</td><td align=right><b>"
				
				 + numeral(subamt_lcy.toFixed(0)).format('0,0')
					+ "</b></td><td align=right>"
					+ numeral(subqnt_lcy.toFixed(0)).format('0,0')
						+ "</b></td></tr>";
				
              innerTable_lcy=innerTable_lcy+"<tr class=total><td align=left colspan=4><b>Total</b>"
			    
				+ "</td><td align=right><b>"
				
				 + numeral(totsubamt_lcy.toFixed(0)).format('0,0')
					+ "</b></td><td align=right>"
					+ numeral(totsubqnt_lcy.toFixed(0)).format('0,0')
						+ "</b></td></tr>";
				
				
					
					mtd_usd = rev + innerTable+"</tbody></table>";
					
					
				
					

					mtd_lcy = rev + innerTable_lcy+"</tbody></table>";
					
					
					
					
					
                   if(cur=="USD")
                	   {
					   $('#graph1').html(mtd_usd);
                	   }
                   else
                	   {
                	    
                	   $('#graph1').html(mtd_lcy);
                	   }
					
					

				}
			});
	}
	
	
	

var query2 = "";

var sin = [], sin2 = [], cos = [], pie = [],cat=[];

var lineChartData = "";

//Param=0,qstring="AMESA";

var query_Dash3 = "", query_region_Dash3 = "",query_country_Dash3= "",query_kam_Dash3= "",
	
	 query1_Dash3 = "" ,query1_region_Dash3 = "",query1_country_Dash3= "",query1_kam_Dash3= "",
	 query2_Dash3 = "" ,query2_region_Dash3 = "",query2_country_Dash3= "",query2_kam_Dash3= "", 
	 query3_Dash3 = "" ,query3_region_Dash3 = "",query3_country_Dash3= "",query3_kam_Dash3="";

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



function DisableCur3()
{ 
  document.getElementById("q156").checked=false;
  document.getElementById("q157").checked=true;
}
function changeCurDisplay3(pcur)
{  
 
   document.getElementById("cur").innerHTML=pcur;
	if(pcur=="USD")
		{
		 $('#table1').html(mtd_usd);
		
		 
		}
	else
		{
		$('#table1').html(mtd_lcy);
		
		
		}
	
		
}

var dashboard3 = (function() {

	//"use strict";
	
	
	
		
		
		
		
		
		function render() {
			
			var html ="";
			
			 mtd_usd="";mtd_lcy="";
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
								+ '    <input type="radio" id="q151" name="quality25" value="All" onChange=Changeit3("0","All") /> All'
								+ '</label> ';
								}
							
							var myString = region;

							var mySplitResult = myString.split("%");

							for(i = 0; i < mySplitResult.length; i++){
								html=html+ ' <label >'
								+ '    <input type="radio" id="q152" name="quality25" value='+mySplitResult[i] +' onChange=Changeit3("1","'+mySplitResult[i]+'") /> '+ mySplitResult[i]
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
								+ '    <input type="radio" id="q153" name="quality25" value='+mySplitResult[i] +' onChange=Changeit3("2","'+mySplitResult[i]+'") /> '+ mySplitResult[i]
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
					+ '    <input type="radio" id="q156" name="quality26" value="LCY" onChange=ChangeCur3("LCY") /> LCY'
					+ '</label> '
					+ ' <label >'
					+ '    <input type="radio" id="q157" name="quality26" value="USD" onChange=ChangeCur3("USD") /> USD'
					+ ' </label> ' +

					' </div></div></div>' +


					'</div>' +

					'<div class="container">' + '<div class="row">'
					+ '<div class="col-xs-12">'
				
					+ '<div id="table1"></div>' + '</div></div>' 

					

					+'</div>';

			$("#content").html(html);
			
			
			SelectMTSQuery_Dash3(qstring);
			MTDList_Dash3(param);
			//SelectYTDQuery_Dash3(qstring);
			//alert(qstring);
			//YTDList_Dash3(param);
			//SelectMTRQuery_Dash3(qstring);
			//MonthlyTrends_Dash3(param);
			//SelectCatQuery_Dash3(qstring);
			//CategoryContribution_Dash3(param);
			
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
			+ "must: [{match: { Month_name:  'February' }}" +

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
function SelectMTSQuery_Dash3(qstring)
{
	document.getElementById("loc").innerHTML=qstring;
	 document.getElementById("cur").innerHTML=cur;//alert(qstring);
  
	 
	 query_Dash3 ={  'size': 0,
		  aggs: {
			    Cust: {
			      terms: {
			        field: 'Customer',
			        size: 50,
			        order: {
			          1: 'desc'
			        }
			      },
			      aggs: {
			        1: {
			          sum: {
			            field: 'Due'
			          }
			        },
			        4: {
			          terms: {
			            field: 'Customer_name',
			            size: 50,
			            order: {
			              1: 'desc'
			            }
			          },
			          aggs: {
			            1: {
			              sum: {
			                field: 'Due'
			              }
			            },
			            5: {
			              terms: {
			                field: 'Customer_Grp',
			                size: 50,
			                order: {
			                  1: 'desc'
			                }
			              },
			              aggs: {
			                1: {
			                  sum: {
			                    field: 'Due'
			                  }
			                },
			                6: {
			                  terms: {
			                    field: 'Sales_Group',
			                    size: 50,
			                    order: {
			                      1: 'desc'
			                    }
			                  },
			                  aggs: {
			                    1: {
			                      sum: {
			                        field: 'Due'
			                      }
			                    },
			                    2: {
			                      sum: {
			                        field: 'Outstanding'
			                      }
			                    },
			                    7: {
			                      sum: {
			                        field: 'Due0_30'
			                      }
			                    },
			                    8: {
			                      sum: {
			                        field: 'Due181_365'
			                      }
			                    },
			                    9: {
			                      sum: {
			                        field: 'Due31_60'
			                      }
			                    },
			                    10: {
			                      sum: {
			                        field: 'Due61_90'
			                      }
			                    },
			                    11: {
			                      sum: {
			                        field: 'Due91_180'
			                      }
			                    },
			                    12: {
			                      max: {
			                        field: 'DueYear'
			                      }
			                    },
			                    13: {
			                      sum: {
			                        field: 'Not_due'
			                      }
			                    },
			                    14: {
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
	            
	     
  
  
  query_region_Dash3 ={ query: { bool: { must: [{match: { Region: qstring}}
  
	 ]}}, 'size': 0,
	  aggs: {
		    Cust: {
		      terms: {
		        field: 'Customer',
		        size: 50,
		        order: {
		          1: 'desc'
		        }
		      },
		      aggs: {
		        1: {
		          sum: {
		            field: 'Due'
		          }
		        },
		        4: {
		          terms: {
		            field: 'Customer_name',
		            size: 50,
		            order: {
		              1: 'desc'
		            }
		          },
		          aggs: {
		            1: {
		              sum: {
		                field: 'Due'
		              }
		            },
		            5: {
		              terms: {
		                field: 'Customer_Grp',
		                size: 50,
		                order: {
		                  1: 'desc'
		                }
		              },
		              aggs: {
		                1: {
		                  sum: {
		                    field: 'Due'
		                  }
		                },
		                6: {
		                  terms: {
		                    field: 'Sales_Group',
		                    size: 50,
		                    order: {
		                      1: 'desc'
		                    }
		                  },
		                  aggs: {
		                    1: {
		                      sum: {
		                        field: 'Due'
		                      }
		                    },
		                    2: {
		                      sum: {
		                        field: 'Outstanding'
		                      }
		                    },
		                    7: {
		                      sum: {
		                        field: 'Due0_30'
		                      }
		                    },
		                    8: {
		                      sum: {
		                        field: 'Due181_365'
		                      }
		                    },
		                    9: {
		                      sum: {
		                        field: 'Due31_60'
		                      }
		                    },
		                    10: {
		                      sum: {
		                        field: 'Due61_90'
		                      }
		                    },
		                    11: {
		                      sum: {
		                        field: 'Due91_180'
		                      }
		                    },
		                    12: {
		                      max: {
		                        field: 'DueYear'
		                      }
		                    },
		                    13: {
		                      sum: {
		                        field: 'Not_due'
		                      }
		                    },
		                    14: {
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
        
  
  query_country_Dash3 ={ query: { bool: { must: [{match: { Country: qstring}}
  
	 ]}}, 'size': 0,
	  aggs: {
		    Cust: {
		      terms: {
		        field: 'Customer',
		        size: 50,
		        order: {
		          1: 'desc'
		        }
		      },
		      aggs: {
		        1: {
		          sum: {
		            field: 'Due'
		          }
		        },
		        4: {
		          terms: {
		            field: 'Customer_name',
		            size: 50,
		            order: {
		              1: 'desc'
		            }
		          },
		          aggs: {
		            1: {
		              sum: {
		                field: 'Due'
		              }
		            },
		            5: {
		              terms: {
		                field: 'Customer_Grp',
		                size: 50,
		                order: {
		                  1: 'desc'
		                }
		              },
		              aggs: {
		                1: {
		                  sum: {
		                    field: 'Due'
		                  }
		                },
		                6: {
		                  terms: {
		                    field: 'Sales_Group',
		                    size: 50,
		                    order: {
		                      1: 'desc'
		                    }
		                  },
		                  aggs: {
		                    1: {
		                      sum: {
		                        field: 'Due'
		                      }
		                    },
		                    2: {
		                      sum: {
		                        field: 'Outstanding'
		                      }
		                    },
		                    7: {
		                      sum: {
		                        field: 'Due0_30'
		                      }
		                    },
		                    8: {
		                      sum: {
		                        field: 'Due181_365'
		                      }
		                    },
		                    9: {
		                      sum: {
		                        field: 'Due31_60'
		                      }
		                    },
		                    10: {
		                      sum: {
		                        field: 'Due61_90'
		                      }
		                    },
		                    11: {
		                      sum: {
		                        field: 'Due91_180'
		                      }
		                    },
		                    12: {
		                      max: {
		                        field: 'DueYear'
		                      }
		                    },
		                    13: {
		                      sum: {
		                        field: 'Not_due'
		                      }
		                    },
		                    14: {
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
        
  
  query_kam_Dash3 ={ query: { bool: { must: [{match: { Sales_Group: qstring}}
  
	 ]}},  'size': 0,
	  aggs: {
		    Cust: {
		      terms: {
		        field: 'Customer',
		        size: 50,
		        order: {
		          1: 'desc'
		        }
		      },
		      aggs: {
		        1: {
		          sum: {
		            field: 'Due'
		          }
		        },
		        4: {
		          terms: {
		            field: 'Customer_name',
		            size: 50,
		            order: {
		              1: 'desc'
		            }
		          },
		          aggs: {
		            1: {
		              sum: {
		                field: 'Due'
		              }
		            },
		            5: {
		              terms: {
		                field: 'Customer_Grp',
		                size: 50,
		                order: {
		                  1: 'desc'
		                }
		              },
		              aggs: {
		                1: {
		                  sum: {
		                    field: 'Due'
		                  }
		                },
		                6: {
		                  terms: {
		                    field: 'Sales_Group',
		                    size: 50,
		                    order: {
		                      1: 'desc'
		                    }
		                  },
		                  aggs: {
		                    1: {
		                      sum: {
		                        field: 'Due'
		                      }
		                    },
		                    2: {
		                      sum: {
		                        field: 'Outstanding'
		                      }
		                    },
		                    7: {
		                      sum: {
		                        field: 'Due0_30'
		                      }
		                    },
		                    8: {
		                      sum: {
		                        field: 'Due181_365'
		                      }
		                    },
		                    9: {
		                      sum: {
		                        field: 'Due31_60'
		                      }
		                    },
		                    10: {
		                      sum: {
		                        field: 'Due61_90'
		                      }
		                    },
		                    11: {
		                      sum: {
		                        field: 'Due91_180'
		                      }
		                    },
		                    12: {
		                      max: {
		                        field: 'DueYear'
		                      }
		                    },
		                    13: {
		                      sum: {
		                        field: 'Not_due'
		                      }
		                    },
		                    14: {
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


/* Render the dashboard */


	function MTDList_Dash3(Param)
	{     
	 ///alert("Param"+Param);
	 var mtd_query="";
	 mtd_lcy="";mtd_usd="";
	
		if(Param==1)
			mtd_query=query_region_Dash3;
		else if(Param==2)
			mtd_query=query_country_Dash3;
		else if(Param==3)
			mtd_query=query_kam_Dash3;
		else
			mtd_query=query_Dash3;
		
	$.ajax({
				url : 'http://192.168.10.142:9200/.agingdata/_search',
				dataType : 'json',
				type : 'POST',
				contentType : 'application/json',
				crossDomain : true,
				data : JSON.stringify(mtd_query),
				// data: {"search": search_term},
				success : function(json) {
					var rev = "<table class='table'><caption>Ageing Analysis(Top 50)<caption><thead><tr><th>Cust</th>" +
							"<th>CName</th><th>CGroup</th><th>SalesGroup</th>"+
							"<th>Due</th><th>181-365</th><th>1Yr></th></tr></thead><tbody>";
					
					//<th>Outstd.</th> var qnt = "<tr><td>Quantity:</td><td>";
					var innerTable="",innerTable_Lcy="";
					var first_act = 0, sec_act = 0, first_qnt = 0, sec_qnt = 0;
					// alert(""+JSON.parse(data.hits.hits.count));
					// $("#results").empty();
					// $("#results").append("<p>Results for <b>" +
					// $("#searchterm").val() + "</b></p>");
					// alert(json.aggregations[1].value);
					/*
					 * $('#graph1').html("<table class='table'><tr><td></td><td>Actual</td><td>Planned</td></tr>"+ "<tr><td>Revenue:</td><td>"+json.aggregations[1].value.toFixed(0)+"</td><td>"+json.aggregations[2].value.toFixed(0)+"</td></tr>"+ "<tr><td>Quantity:</td><td>"+json.aggregations[3].value.toFixed(0)+"</td><td>"+json.aggregations[4].value.toFixed(0)+"</td></tr>"+ "</table>" );
					 * 
					 */

					for ( var i = 0; i < json.aggregations.Cust.buckets.length; i++) 
					{
					
						var cls="even";
					     if(i%2==0)
					    	 cls="odd";
							
							innerTable=innerTable+"<tr class="+cls+"><td align=left ><span title='"+json.aggregations.Cust.buckets[i][4].buckets[0].key+","+json.aggregations.Cust.buckets[i][4].buckets[0][5].buckets[0].key+","+json.aggregations.Cust.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0].key+"'>"
							
								    + json.aggregations.Cust.buckets[i].key
								   
								    + "</span></td><td align=left>"
								    
									+ json.aggregations.Cust.buckets[i][4].buckets[0].key
											
									+ "</td><td align=left>"
									
							+ json.aggregations.Cust.buckets[i][4].buckets[0][5].buckets[0].key
							 + "</td><td align=left>"
							 
							 + json.aggregations.Cust.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0].key
							 + "</td><td align=right>"
							
							
							 +numeral(json.aggregations.Cust.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0][1].value.toFixed(0)).format('0,0')
							+ "</td><td align=right>"
							/*
							+numeral(json.aggregations.Cust.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0][2].value.toFixed(0)).format('0,0')
							+ "</td><td align=right>"*/
							+numeral(json.aggregations.Cust.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0][8].value.toFixed(0)).format('0,0')
							+ "</td><td align=right>"	
							+numeral(json.aggregations.Cust.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0][12].value.toFixed(0)).format('0,0')
							+ "</td></tr>";
							
							
					innerTable_Lcy=innerTable_Lcy+"<tr class="+cls+"><td align=left ><span title='"+json.aggregations.Cust.buckets[i][4].buckets[0].key+","+json.aggregations.Cust.buckets[i][4].buckets[0][5].buckets[0].key+","+json.aggregations.Cust.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0].key+"'>"
							
						    + json.aggregations.Cust.buckets[i].key
						   
						    + "</span></td><td align=left>"
						    
							+ json.aggregations.Cust.buckets[i][4].buckets[0].key
									
							+ "</td><td align=left>"
							
					+ json.aggregations.Cust.buckets[i][4].buckets[0][5].buckets[0].key
					 + "</td><td align=left>"
					 
					 + json.aggregations.Cust.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0].key
					 + "</td><td align=right>"
					
					
					 +numeral(json.aggregations.Cust.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0][1].value.toFixed(0)*json.aggregations.Cust.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0][14].value
								.toFixed(4)).format('0,0')
					+ "</td><td align=right>"
					/*
					+numeral(json.aggregations.Cust.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0][2].value.toFixed(0)).format('0,0')
					+ "</td><td align=right>"*/
					+numeral(json.aggregations.Cust.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0][8].value.toFixed(0)*json.aggregations.Cust.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0][14].value
							.toFixed(4)).format('0,0')
					+ "</td><td align=right>"	
					+numeral(json.aggregations.Cust.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0][12].value.toFixed(0)*json.aggregations.Cust.buckets[i][4].buckets[0][5].buckets[0][6].buckets[0][14].value
							.toFixed(4)).format('0,0')
					+ "</td></tr>"
					

						

					}
					mtd_usd = rev + innerTable+"</tbody></table>";
					
					mtd_lcy = rev + innerTable_Lcy+"</tbody></table>";
					
					
					
					
					if(cur=="USD")
		         	   {
						   $('#table1').html(mtd_usd);
		         	   }
		            else
		         	   {
		         	    
		         	      $('#table1').html(mtd_lcy);
		         	   }
					

				}
			});
	}
	
	
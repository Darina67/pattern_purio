var years=["За всё время",2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],initialCategory="Все области",initialYear=years[0],isProjectsSectionVisible=!0;function activateInitialButtons(){$(".control-btn-disease").removeClass("active"),$(".control-btn-disease:first-child").addClass("active"),$(".control-btn-years").removeClass("active"),$(".control-btn-years:first-child").addClass("active")}function populateRadioButtonsForDiseases(e){var a=$(".disease-buttons");a.empty(),$.each(e,function(e,t){a.append($(`<label class="control-btn-disease control-btn ${0===e?"active":""}"> 
                ${t.name}
               <input ${0===e?"checked":""} type="radio" name="diseaseRadio" value="${t.name}" />
            </label>`))})}function populateRadioButtonsForYears(e,a){var t=$(".year-buttons");if(t.empty(),t.append($(`<label class="control-btn control-btn-years ${a===initialCategory?"active":""}"> 
            За всё время
            <input ${a===initialCategory?"checked":""} type="radio" name="yearRadio" value="За всё время" data-disease="${a}" />
        </label>`)),a===initialCategory)$.each(years.slice(1),function(e,a){t.append($(`<label class="control-btn control-btn-years"> 
                    ${a}
                   <input type="radio" name="yearRadio" value="${a}" />
                </label>`))});else{var i=e.find(function(e){return e.name===a}),n=i?Object.keys(i.phases).map(Number):[];$.each(n,function(e,a){t.append($(`<label class="control-btn control-btn-years"> 
                    ${a}
                   <input type="radio" name="yearRadio" value="${a}" />
                </label>`))})}}function update(e,a){void 0===a&&(a=years[0]),$(".controls.year-buttons .control-btn-years").removeClass("active"),$(`.controls.year-buttons .control-btn-years input[value="${a}"]`).parent().addClass("active"),$(".projects-container").html("");var t=file1.find(function(a){return a.name===e});if("За всё время"===a&&t)for(var i in t.phases){let n=t.phases[i],s;"I"==n.title?s=$imgPath="images/phases/1.webp":"II"==n.title?s=$imgPath="images/phases/2.webp":"III"==n.title?s=$imgPath="images/phases/3.webp":"IV"==n.title&&(s=$imgPath="images/phases/4.webp"),$(".projects-container").append(`
                <article class="project-item">
                    <div class="popup">
                        <figure>
                            <figcaption style="background: linear-gradient(rgba(85, 133, 181, 0.7), rgba(85, 133, 181, 0.7)), url(${s}); background-position: center; background-size: cover;">
                                <div class="caption-wrap">
                                    <div class="actions">
                                        ${""===n.count?`<h3 class="unhover-info"><b>Фаза: </b>${n.title}</h3>`:`<h3 class="unhover-info"><b>Фаза: </b>${n.title}<br>Число исследований: ${n.count}</h3>`}
                                        <h3 class="hover-info"><b>${e}<br>${a}</b></h3>
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </article>
            `).hide().fadeIn(200)}else{var o=file2.find(function(t){return t.phases[a]&&t.name===e}),r=o?o.phases[a]:file1.find(a=>a.name===e);if(r)for(var i in r){let l=r[i],c;"I"==l.title?c=$imgPath="images/phases/1.webp":"II"==l.title?c=$imgPath="images/phases/2.webp":"III"==l.title?c=$imgPath="images/phases/3.webp":"IV"==l.title&&(c=$imgPath="images/phases/4.webp"),$(".projects-container").append(`
                    <article class="project-item">
                        <div class="popup">
                            <figure>
                                <figcaption style="background: linear-gradient(rgba(85, 133, 181, 0.7), rgba(85, 133, 181, 0.7)), url(${c}); background-position: center; background-size: cover;">
                                    <div class="caption-wrap">
                                        <div class="actions">
                                            ${""===l.count?`<h3 class="unhover-info"><b>Фаза: </b>${l.title}</h3>`:`<h3 class="unhover-info"><b>Фаза: </b>${l.title}<br>Число исследований: ${l.count}</h3>`}
                                            <h3 class="hover-info"><b>${e}<br>${a}</b></h3>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </article>
                `).hide().fadeIn(200)}}}function isSectionVisible(){var e,a=$("#projects"),t=$(window).height();return($(window).scrollTop()||document.documentElement.scrollTop)+t>a.offset().top}function setDefaultValues(){populateRadioButtonsForDiseases(file1),populateRadioButtonsForYears(file1,initialCategory),update(initialCategory,initialYear)}console.log(initialYear),$(document).ready(function(){populateRadioButtonsForDiseases(file1),populateRadioButtonsForYears(file1,initialCategory),update(initialCategory,initialYear)}),$(document).on("change","input[name=diseaseRadio]",function(){let e=$(this).val();populateRadioButtonsForYears(file2,e),update(e,$("input[name=yearRadio]:checked").val())}),$(document).on("change","input[name=yearRadio]",function(){let e=$("input[name=diseaseRadio]:checked").val(),a=$(this).val();update(e,a)}),$(document).on("click",".control-btn-disease",function(){$(".control-btn-disease").removeClass("active"),$(this).addClass("active")}),$(document).on("click",".control-btn-years",function(){$(".control-btn-years").removeClass("active"),$(this).addClass("active")}),$(window).scroll(function(){isSectionVisible()||setDefaultValues()});var isProjectsSectionVisible=!0;function activateInitialButtons(){$(".control-btn-disease").removeClass("active"),$(".control-btn-disease:first-child").addClass("active"),$("controls.year-buttons .control-btn-years").removeClass("active"),$("controls.year-buttons .control-btn-years:first-child").addClass("active")}$(window).scroll(function(){var e=$("#projects").offset().top,a=e+$("#projects").outerHeight(),t=$(window).scrollTop();t+$(window).height()<e||t>a?isProjectsSectionVisible&&(update(initialCategory,initialYear),activateInitialButtons(),isProjectsSectionVisible=!1):isProjectsSectionVisible=!0});
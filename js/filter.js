var years = [
    "За всё время", 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023
];

var initialCategory = "Все области";
var initialYear = years[0];
var isProjectsSectionVisible = true;
console.log(initialYear);

function activateInitialButtons() {
    $('.control-btn-disease').removeClass('active');
    $('.control-btn-disease:first-child').addClass('active');

    $('.control-btn-years').removeClass('active');
    $('.control-btn-years:first-child').addClass('active');
}

function populateRadioButtonsForDiseases(diseases) {
    var container = $('.disease-buttons');
    container.empty();

    $.each(diseases, function (index, disease) {
        container.append($(
            `<label class="control-btn-disease control-btn ${index === 0 ? 'active' : ''}"> 
                ${disease.name}
               <input ${index === 0 ? 'checked' : ''} type="radio" name="diseaseRadio" value="${disease.name}" />
            </label>`
        ));
    });
}

function populateRadioButtonsForYears(diseases, selectedDisease) {
    var container = $('.year-buttons');
    container.empty();

    // Add "За все время" button for the selected disease
    container.append($(
        `<label class="control-btn control-btn-years ${selectedDisease === initialCategory ? 'active' : ''}"> 
            За всё время
            <input ${selectedDisease === initialCategory ? 'checked' : ''} type="radio" name="yearRadio" value="За всё время" data-disease="${selectedDisease}" />
        </label>`
    ));

    if (selectedDisease === initialCategory) {
        // If "Все области" is selected, display all years
        $.each(years.slice(1), function (index, year) {
            container.append($(
                `<label class="control-btn control-btn-years"> 
                    ${year}
                   <input type="radio" name="yearRadio" value="${year}" />
                </label>`
            ));
        });
    } else {
        // Display years based on the selected disease
        var selectedDiseaseData = diseases.find(function (disease) {
            return disease.name === selectedDisease;
        });

        var availableYears = selectedDiseaseData ? Object.keys(selectedDiseaseData.phases).map(Number) : [];

        $.each(availableYears, function (index, year) {
            container.append($(
                `<label class="control-btn control-btn-years"> 
                    ${year}
                   <input type="radio" name="yearRadio" value="${year}" />
                </label>`
            ));
        });
    }
}

function update(selectedDisease, selectedYear) {
    if (selectedYear === undefined) {
        selectedYear = years[0];
    }
         // Удалите текущий класс "active" у всех кнопок годов
         $('.controls.year-buttons .control-btn-years').removeClass('active');

         // Найдите и добавьте класс "active" для кнопки года, соответствующей selectedYear
         $(`.controls.year-buttons .control-btn-years input[value="${selectedYear}"]`).parent().addClass('active');

    $('.projects-container').html('');

    // Find the selected disease data in file1.js
    var selectedDiseaseData = file1.find(function (item) {
        return item.name === selectedDisease;
    });

    // If "За все время" is selected, display blocks based on file1.js data
    if (selectedYear === "За всё время" && selectedDiseaseData) {
        for (var key in selectedDiseaseData.phases) {
            let p = selectedDiseaseData.phases[key];

            let $backgroundimg;
            if (p.title == "I") {
                $imgPath = "images/phases/1.png";
                $backgroundimg = $imgPath;
            } else if (p.title == "II") {
                $imgPath = "images/phases/2.png";
                $backgroundimg = $imgPath;
            } else if (p.title == "III") {
                $imgPath = "images/phases/3.png";
                $backgroundimg = $imgPath;
            } else if (p.title == "IV") {
                $imgPath = "images/phases/4.png";
                $backgroundimg = $imgPath;
            }

            $('.projects-container').append(`
                <article class="project-item">
                    <div class="popup">
                        <figure>
                            <figcaption style="background: linear-gradient(rgba(85, 133, 181, 0.7), rgba(85, 133, 181, 0.7)), url(${$backgroundimg}); background-position: center; background-size: cover;">
                                <div class="caption-wrap">
                                    <div class="actions">
                                        ${p.count === "" ?
                                            `<h3 class="unhover-info"><b>Фаза: </b>${p.title}</h3>` :
                                            `<h3 class="unhover-info"><b>Фаза: </b>${p.title}<br>Число исследований: ${p.count}</h3>`
                                        }
                                        <h3 class="hover-info"><b>${selectedDisease}<br>${selectedYear}</b></h3>
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </article>
            `).hide().fadeIn(200);
        }
    } else {
        // Display blocks based on the selected disease and year
        var matchingDisease = file2.find(function (item) {
            return item.phases[selectedYear] && item.name === selectedDisease;
        });

        var selectedPhases = matchingDisease ? matchingDisease.phases[selectedYear] : file1.find(item => item.name === selectedDisease);
        var selectedFile = matchingDisease ? 2 : 1;

        if (selectedPhases) {
            for (var key in selectedPhases) {
                let p = selectedPhases[key];

                let $backgroundimg;
                if (p.title == "I") {
                    $imgPath = "images/phases/1.png";
                    $backgroundimg = $imgPath;
                } else if (p.title == "II") {
                    $imgPath = "images/phases/2.png";
                    $backgroundimg = $imgPath;
                } else if (p.title == "III") {
                    $imgPath = "images/phases/3.png";
                    $backgroundimg = $imgPath;
                } else if (p.title == "IV") {
                    $imgPath = "images/phases/4.png";
                    $backgroundimg = $imgPath;
                }

                $('.projects-container').append(`
                    <article class="project-item">
                        <div class="popup">
                            <figure>
                                <figcaption style="background: linear-gradient(rgba(85, 133, 181, 0.7), rgba(85, 133, 181, 0.7)), url(${$backgroundimg}); background-position: center; background-size: cover;">
                                    <div class="caption-wrap">
                                        <div class="actions">
                                            ${p.count === "" ?
                                                `<h3 class="unhover-info"><b>Фаза: </b>${p.title}</h3>` :
                                                `<h3 class="unhover-info"><b>Фаза: </b>${p.title}<br>Число исследований: ${p.count}</h3>`
                                            }
                                            <h3 class="hover-info"><b>${selectedDisease}<br>${selectedYear}</b></h3>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </article>
                `).hide().fadeIn(200);
            }
        }
    }
}

$(document).ready(function () {
    populateRadioButtonsForDiseases(file1);
    populateRadioButtonsForYears(file1, initialCategory);
    update(initialCategory, initialYear);
});

$(document).on('change', 'input[name=diseaseRadio]', function () {
    let selectedDisease = $(this).val();
    populateRadioButtonsForYears(file2, selectedDisease);
    update(selectedDisease, $('input[name=yearRadio]:checked').val());
});

$(document).on('change', 'input[name=yearRadio]', function () {
    let selectedDisease = $('input[name=diseaseRadio]:checked').val();
    let selectedYear = $(this).val();
    update(selectedDisease, selectedYear);
});

$(document).on('click', '.control-btn-disease', function () {
    $('.control-btn-disease').removeClass('active');
    $(this).addClass('active');
});

$(document).on('click', '.control-btn-years', function () {
    $('.control-btn-years').removeClass('active');
    $(this).addClass('active');
});

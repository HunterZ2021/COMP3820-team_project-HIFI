// $(#Contact_No.)

$(function (){

    $.ajax({
        type: 'GET',
        // get URL from client object
        url: 'https://r4.smarthealthit.org/Patient/476d3544-6370-479f-9ac9-c43434aae12f',
        success: function(data) {
            // Recipient
            
            // Identify
            $('#Identify_name').val(data.name[0].family + ', ' + data.name[0].given[0])
            $('#Identify_patientBirthDate').val(data.birthDate)
            $('#Identify_patientGender').val(data.gender)
            $('#Identify_patientAddress').val(data.address[0].line[0] + ', ' + data.address[0].postalCode + ', ' + data.address[0].city + ', ' + data.address[0].country)

            console.log('success', data)
        }
    })

    $.ajax({
        type: 'GET',
        // get URL from client object
        url: 'https://r4.smarthealthit.org/Encounter?patient=476d3544-6370-479f-9ac9-c43434aae12f&_sort=-date&_count=1',
        success: function(data) {
            // Situation
            $('#Situation_encounterStatus').val(data.entry[0].resource.status)
            $('#Situation_encounterReasons').val(data.entry[0].resource.reasonCode[0].coding[0].display)
            $('#Situation_diagnosisProblem').val(data.entry[0].resource.type[0].coding[0].display)

            console.log('success', data)
        }
    })
})
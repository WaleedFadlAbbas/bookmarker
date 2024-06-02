
//dark theme
function darkMode() {
    document.body.classList.toggle('darkMode')
}
//................................

//var dec.
const siteName = document.getElementById('siteName')
const siteUrl = document.getElementById('siteUrl')
let allSites = []

if (localStorage.getItem('allTheSites')) {
    allSites = JSON.parse(localStorage.getItem('allTheSites'))
    displaySites()
}

function addSites() {
    let site = {
        name: siteName.value,
        url: siteUrl.value
    }

    allSites.push(site)
    submit()
    localStorage.setItem('allTheSites', JSON.stringify(allSites))
    clearInputs()
}

function submit() {
    let i
    if (siteName.classList.contains("is-valid") &&
        siteUrl.classList.contains("is-valid")) {
        displaySites()
    }
    else {
        alert('please enter valid inputs')
        allSites.splice(i, 1)
    }
}

function displaySites() {


    if (allSites.length != 0) {
        let tableRow = `<thead>
        <tr class=" ">
            <th class="text-capitalize col-3 text-center">index</th>
    
            <th class="text-capitalize col-3 text-center">website name</th>
    
            <th class="text-capitalize col-3 text-center">visit</th>
    
            <th class="text-capitalize col-3 text-center">delete</th>
        </tr>
    </thead>`
        for (let i = 0; i < allSites.length; i++) {


            tableRow += `<tr class=" border-top">
<td class="text-capitalize col-3 text-center">${Number([i]) + 1}</td>

<td class="text-capitalize col-3 text-center">${allSites[i].name}</td>

<td class="text-capitalize col-3 text-center py-2 ">
    <button class="btn btn-success text-capitalize px-2 "><a href="${allSites[i].url}"><i
            class="fa-solid fa-eye mx-1 text-white "></i><span class="">visit</span><a></button>
</td>

<td class="text-capitalize col-3 text-center py-2 ">
    <button class="btn btn-danger text-capitalize px-2 " onclick="deleteSite(${i})"><i
            class="fa-solid fa-trash text-white mx-1"></i><span class="">delete</span></button>
</td>
</tr>`
            document.getElementById('tableOfContents').innerHTML = tableRow
        }
    } else {
        let tableRow = `<thead>
        <tr class=" ">
            <th class="text-capitalize col-3 text-center">index</th>
    
            <th class="text-capitalize col-3 text-center">website name</th>
    
            <th class="text-capitalize col-3 text-center">visit</th>
    
            <th class="text-capitalize col-3 text-center">delete</th>
        </tr>
    </thead>`
        document.getElementById('tableOfContents').innerHTML = tableRow
    }
}

function clearInputs() {
    siteName.value = ``
    siteUrl.value = ``
    document.getElementById('siteName').classList.remove('is-valid')
    document.getElementById('siteName').classList.remove('is-invalid')
    document.getElementById('siteUrl').classList.remove('is-valid')
    document.getElementById('siteUrl').classList.remove('is-invalid')
    document.getElementById('siteName').nextElementSibling.classList.add('visually-hidden')
    document.getElementById('siteUrl').nextElementSibling.classList.add('visually-hidden')
}

function deleteSite(index) {

    allSites.splice(index, 1)

    displaySites()
    localStorage.setItem('allTheSites', JSON.stringify(allSites))
}

function validateInput(element) {
    let regex = {
        siteName: /^[a-zA-Z0-9 _-]{3,50}$/,
        siteUrl: /^(https?:\/\/)?([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,6})(:[0-9]{1,5})?(\/.*)?$/
    }


    if (regex[element.id].test(element.value)) {
        document.getElementById(element.id).nextElementSibling.classList.add('visually-hidden')
        document.getElementById(element.id).classList.add('is-valid')
        document.getElementById(element.id).classList.remove('is-invalid')
        return true;
    }
    else {
        document.getElementById(element.id).nextElementSibling.classList.remove('visually-hidden')
        document.getElementById(element.id).classList.add('is-invalid')
        document.getElementById(element.id).classList.remove('is-valid')
        return false;
    }
}

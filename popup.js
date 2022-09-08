var fleet = document.getElementById("fleet")
var tail_num = document.getElementById("tail_num")
var fin = document.getElementById("fin")


submit.addEventListener("click", async () => {
	//chrome.scripting.executeScript({
		//target: { tabId: tab.id },
		//func: search
	//})
	search()
})

function search() {
	let fleetvalue = fleet.value
	switch (fleetvalue) {
			case "A300":
				window.open('http://ngps-app.lhsprod.fedex.com:8001/ngpsmobile/Manual.do?publicationName=A300-600', '_blank')
				break
			case "757":
				window.open('http://ngps-app.lhsprod.fedex.com:8001/ngpsmobile/Manual.do?publicationName=B757', '_blank')
				break
			case "767":
				window.open('http://ngps-app.lhsprod.fedex.com:8001/ngpsmobile/Manual.do?publicationName=B767', '_blank')
				break
			case "777":
				window.open('http://ngps-app.lhsprod.fedex.com:8001/ngpsmobile/Manual.do?publicationName=B777', '_blank')
				break
			case "MD11":
				window.open('http://ngps-app.lhsprod.fedex.com:8001/ngpsmobile/Manual.do?publicationName=MD-11', '_blank')
				break
			default:
				alert("select a fleet type")
		}
}

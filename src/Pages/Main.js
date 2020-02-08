import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Main.css";

const Mainpage = () => {
  return (
    <div>
      <Header />
      <Jumbotron fluid>
  
</Jumbotron>
      <Container>
        <Row>
          <Col xs={6} md={4}>
          <div class="bottom-center">New Shipment</div>
            <Image href="http://localhost:3000/Newship"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRv%0D%0AcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVy%0D%0Ac2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4%0D%0AbWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3%0D%0ALnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDY0IDQ2%0D%0ANCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDY0IDQ2NDsiIHhtbDpzcGFjZT0i%0D%0AcHJlc2VydmUiPgo8cGF0aCBzdHlsZT0iZmlsbDojNkI5NjhCOyIgZD0iTTQwLDY4aDM4NGMxMy4y%0D%0ANTUsMCwyNCwxMC43NDUsMjQsMjR2MzIwbDAsMEgxNmwwLDBWOTJDMTYsNzguNzQ1LDI2Ljc0NSw2%0D%0AOCw0MCw2OHoiLz4KPHJlY3QgeD0iNTYiIHk9IjEwOCIgc3R5bGU9ImZpbGw6I0M0REVFRDsiIHdp%0D%0AZHRoPSIzNTIiIGhlaWdodD0iMjMyIi8+CjxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMw%0D%0AMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2lu%0D%0AOnJvdW5kOyIgeDE9IjIzMiIgeTE9IjE0MCIgeDI9IjIzMiIgeTI9IjIyMCIvPgo8cG9seWdvbiBz%0D%0AdHlsZT0iZmlsbDojRjlDRDc0OyIgcG9pbnRzPSIyMzIsMjggMTIwLDg0IDEyMCwyMjggMjMyLDI4%0D%0ANCAzNDQsMjI4IDM0NCw4NCAiLz4KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0Y5QjY1OTsiIHBvaW50%0D%0Acz0iMzQ0LDg0IDIzMiwxNDAgMTIwLDg0IDIzMiwyOCAiLz4KPHBvbHlnb24gc3R5bGU9ImZpbGw6%0D%0AI0VCOTg1MDsiIHBvaW50cz0iMjMyLDI4NCAyMzIsMTQwIDM0NCw4NCAzNDQsMjI4ICIvPgo8cGF0%0D%0AaCBzdHlsZT0iZmlsbDojNjA4Nzc4OyIgZD0iTTQ0MCw0MzZIMjRjLTEzLjI1NSwwLTI0LTEwLjc0%0D%0ANS0yNC0yNGwwLDB2LTI0aDE2MGwxNiwxNmgxMTJsMTYtMTZoMTYwdjI0CglDNDY0LDQyNS4yNTUs%0D%0ANDUzLjI1NSw0MzYsNDQwLDQzNkw0NDAsNDM2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzRERUVE%0D%0AOyIgZD0iTTI0MCwzODBoLTE2Yy00LjQxOCwwLTgtMy41ODItOC04czMuNTgyLTgsOC04aDE2YzQu%0D%0ANDE4LDAsOCwzLjU4Miw4LDhTMjQ0LjQxOCwzODAsMjQwLDM4MHoiLz4KPGc+CjwvZz4KPGc+Cjwv%0D%0AZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4K%0D%0APGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+%0D%0ACjwvZz4KPC9zdmc+Cg=="
              rounded
            />
          </Col>
          <Col xs={6} md={4}>
          <div class="bottom-center">Track</div>
            <Image href="http://localhost:3000/Tracking"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRv%0D%0AcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVy%0D%0Ac2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4%0D%0AbWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3%0D%0ALnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDY0IDQ2%0D%0ANCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDY0IDQ2NDsiIHhtbDpzcGFjZT0i%0D%0AcHJlc2VydmUiPgo8cmVjdCB4PSI4MCIgeT0iMzIiIHN0eWxlPSJmaWxsOiM2Qjk2OEI7IiB3aWR0%0D%0AaD0iMzA0IiBoZWlnaHQ9IjM4NCIvPgo8Zz4KCTxyZWN0IHg9IjExMiIgeT0iNjQiIHN0eWxlPSJm%0D%0AaWxsOiNDNERFRUQ7IiB3aWR0aD0iMTA0IiBoZWlnaHQ9IjEyMCIvPgoJPHJlY3QgeD0iMjQ4IiB5%0D%0APSI2NCIgc3R5bGU9ImZpbGw6I0M0REVFRDsiIHdpZHRoPSIxMDQiIGhlaWdodD0iMTIwIi8+Cjwv%0D%0AZz4KPGc+Cgk8cmVjdCB4PSIxNiIgeT0iNDAwIiBzdHlsZT0iZmlsbDojRjlDRDc0OyIgd2lkdGg9%0D%0AIjE3NiIgaGVpZ2h0PSI2NCIvPgoJPHJlY3QgeD0iMTY4IiB5PSIzMTIiIHN0eWxlPSJmaWxsOiNG%0D%0AOUNENzQ7IiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MiIvPgo8L2c+CjxnPgoJPHJlY3QgeT0iMzY4%0D%0AIiBzdHlsZT0iZmlsbDojRUI5ODUwOyIgd2lkdGg9IjIwOCIgaGVpZ2h0PSIzMiIvPgoJPHJlY3Qg%0D%0AeD0iMTUyIiB5PSIyODAiIHN0eWxlPSJmaWxsOiNFQjk4NTA7IiB3aWR0aD0iMjMyIiBoZWlnaHQ9%0D%0AIjMyIi8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRjlCNjU5OyIgZD0iTTYxLjIwOCw0%0D%0ANjRIMTkydi02NGgtNTIuOEMxMjEuMTkzLDQyOS41NDMsOTMuNjk4LDQ1Mi4xMDUsNjEuMjA4LDQ2%0D%0ANHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOUI2NTk7IiBkPSJNMTc2LDQ2NGgxOTJWMzEyaC03%0D%0ANy42QzI3MC4xMzMsMzczLjkyOCwyMjkuODk5LDQyNy4zODUsMTc2LDQ2NHoiLz4KPC9nPgo8cmVj%0D%0AdCB4PSIzMzYiIHk9IjM5MiIgc3R5bGU9ImZpbGw6I0Y5Q0Q3NDsiIHdpZHRoPSIxMTIiIGhlaWdo%0D%0AdD0iNzIiLz4KPHJlY3QgeD0iMzIwIiB5PSIzNjAiIHN0eWxlPSJmaWxsOiNFQjk4NTA7IiB3aWR0%0D%0AaD0iMTQ0IiBoZWlnaHQ9IjMyIi8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGOUI2NTk7IiBkPSJNMzYw%0D%0ALDQ2NGg4OHYtNzJoLTIxLjI0OEM0MTMuNDE3LDQyMi45NDUsMzg5Ljg0OSw0NDguMzY1LDM2MCw0%0D%0ANjR6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGOUNENzQ7IiBkPSJNODAsMGgzMDRjOC44MzcsMCwx%0D%0ANiw3LjE2MywxNiwxNmwwLDBjMCw4LjgzNy03LjE2MywxNi0xNiwxNkg4MGMtOC44MzcsMC0xNi03%0D%0ALjE2My0xNi0xNmwwLDAKCUM2NCw3LjE2Myw3MS4xNjMsMCw4MCwweiIvPgo8cGF0aCBzdHlsZT0i%0D%0AZmlsbDojQzRERUVEOyIgZD0iTTEyOCwyNTZjLTEzLjI1NSwwLTI0LTEwLjc0NS0yNC0yNGMwLTEz%0D%0ALjI1NSwxMC43NDUtMjQsMjQtMjRjNC40MTgsMCw4LDMuNTgyLDgsOHMtMy41ODIsOC04LDgKCXMt%0D%0AOCwzLjU4Mi04LDhzMy41ODIsOCw4LDhzOC0zLjU4Miw4LThzMy41ODItOCw4LThzOCwzLjU4Miw4%0D%0ALDhDMTUyLDI0NS4yNTUsMTQxLjI1NSwyNTYsMTI4LDI1NnoiLz4KPGc+CjwvZz4KPGc+CjwvZz4K%0D%0APGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+%0D%0ACjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+Cjwv%0D%0AZz4KPC9zdmc+Cg=="
              rounded
            />
          </Col>
          <Col xs={6} md={4}>
          <div class="bottom-center">Address Book</div>
            <Image href="http://localhost:3000/Addressbook"
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRv%0D%0AcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVy%0D%0Ac2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4%0D%0AbWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3%0D%0ALnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDY0IDQ2%0D%0ANCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDY0IDQ2NDsiIHhtbDpzcGFjZT0i%0D%0AcHJlc2VydmUiPgo8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGMkMwOUE7IiBjeD0iMjMyIiBjeT0iMjQi%0D%0AIHI9IjI0Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiM2Qjk2OEI7IiBkPSJNMjMyLDQ4TDIzMiw0OGMy%0D%0AMi4wOTEsMCw0MCwxNy45MDksNDAsNDB2NDBsMCwwaC04MGwwLDBWODhDMTkyLDY1LjkwOSwyMDku%0D%0AOTA5LDQ4LDIzMiw0OHoiLz4KPGNpcmNsZSBzdHlsZT0iZmlsbDojRjJDMDlBOyIgY3g9IjIzMiIg%0D%0AY3k9IjE5MiIgcj0iMjQiLz4KPHBhdGggc3R5bGU9ImZpbGw6IzZCOTY4QjsiIGQ9Ik0yMzIsMjE2%0D%0ATDIzMiwyMTZjMjIuMDkxLDAsNDAsMTcuOTA5LDQwLDQwdjQwbDAsMGgtODBsMCwwdi00MEMxOTIs%0D%0AMjMzLjkwOSwyMDkuOTA5LDIxNiwyMzIsMjE2eiIvPgo8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGMkMw%0D%0AOUE7IiBjeD0iNDI0IiBjeT0iMTkyIiByPSIyNCIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNkI5NjhC%0D%0AOyIgZD0iTTQyNCwyMTZMNDI0LDIxNmMyMi4wOTEsMCw0MCwxNy45MDksNDAsNDB2NDBsMCwwaC04%0D%0AMGwwLDB2LTQwQzM4NCwyMzMuOTA5LDQwMS45MDksMjE2LDQyNCwyMTZ6Ii8+CjxjaXJjbGUgc3R5%0D%0AbGU9ImZpbGw6I0YyQzA5QTsiIGN4PSI0MCIgY3k9IjE5MiIgcj0iMjQiLz4KPHBhdGggc3R5bGU9%0D%0AImZpbGw6IzZCOTY4QjsiIGQ9Ik00MCwyMTZMNDAsMjE2YzIyLjA5MSwwLDQwLDE3LjkwOSw0MCw0%0D%0AMHY0MGwwLDBIMGwwLDB2LTQwQzAsMjMzLjkwOSwxNy45MDksMjE2LDQwLDIxNnoiLz4KPGNpcmNs%0D%0AZSBzdHlsZT0iZmlsbDojRjJDMDlBOyIgY3g9IjIzMiIgY3k9IjM2MCIgcj0iMjQiLz4KPHBhdGgg%0D%0Ac3R5bGU9ImZpbGw6IzZCOTY4QjsiIGQ9Ik0yMzIsMzg0TDIzMiwzODRjMjIuMDkxLDAsNDAsMTcu%0D%0AOTA5LDQwLDQwdjQwbDAsMGgtODBsMCwwdi00MEMxOTIsNDAxLjkwOSwyMDkuOTA5LDM4NCwyMzIs%0D%0AMzg0eiIvPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOUI2NTk7IiBkPSJNMTUwLjQ1Niw0MTMu%0D%0AODhjLTEuMTc2LDAuMDAyLTIuMzM3LTAuMjU4LTMuNC0wLjc2Yy0yLjUzOS0xLjE5NS01LjA0NS0y%0D%0ALjQzNy03LjUyLTMuNzI4CgkJYy0zLjkxOS0yLjA1LTUuNDM0LTYuODg5LTMuMzg0LTEwLjgwOGMy%0D%0ALjA1LTMuOTE5LDYuODg5LTUuNDM0LDEwLjgwOC0zLjM4NGMyLjI3MiwxLjE4OSw0LjU3MywyLjMz%0D%0AMyw2LjkwNCwzLjQzMgoJCWMzLjk5OSwxLjg4LDUuNzE2LDYuNjQ1LDMuODM3LDEwLjY0M2MtMS4z%0D%0AMiwyLjgwNy00LjE0Myw0LjU5OS03LjI0NSw0LjU5N0wxNTAuNDU2LDQxMy44OHoiLz4KCTxwYXRo%0D%0AIHN0eWxlPSJmaWxsOiNGOUI2NTk7IiBkPSJNMzI4LjEzNiw0MDYuMjQ4Yy00LjQxOC0wLjAwOC03%0D%0ALjk5NC0zLjU5Ni03Ljk4Ni04LjAxNGMwLjAwNS0yLjg0NywxLjUyMy01LjQ3NywzLjk4Ni02Ljkw%0D%0ANgoJCWMyLjIxMy0xLjI4NSw0LjQwNS0yLjYxOSw2LjU3Ni00YzMuNTY1LTIuNjEsOC41NzEtMS44%0D%0AMzUsMTEuMTgxLDEuNzNzMS44MzUsOC41NzEtMS43MywxMS4xODEKCQljLTAuMjgyLDAuMjA2LTAu%0D%0ANTc2LDAuMzk0LTAuODgyLDAuNTYxYy0yLjM1MiwxLjQ5My00LjczMSwyLjk0MS03LjEzNiw0LjM0%0D%0ANEMzMzAuOTI5LDQwNS44NTksMzI5LjU0Niw0MDYuMjQsMzI4LjEzNiw0MDYuMjQ4eiIvPgoJPHBh%0D%0AdGggc3R5bGU9ImZpbGw6I0Y5QjY1OTsiIGQ9Ik0xMDkuODA4LDM4OC4xMTJjLTEuODU0LTAuMDAx%0D%0ALTMuNjQ5LTAuNjQ2LTUuMDgtMS44MjRjLTIuMTY4LTEuNzg0LTQuMjgtMy42MDgtNi40LTUuNDgK%0D%0ACQljLTMuMzQxLTIuODkxLTMuNzA2LTcuOTQzLTAuODE1LTExLjI4NGMyLjg5MS0zLjM0MSw3Ljk0%0D%0AMy0zLjcwNiwxMS4yODQtMC44MTVjMC4wOCwwLjA2OSwwLjE1OCwwLjEzOSwwLjIzNSwwLjIxMQoJ%0D%0ACWMxLjkwNCwxLjcxMiwzLjg0NSwzLjM4Nyw1LjgyNCw1LjAyNGMzLjQwNiwyLjgxNCwzLjg4Nyw3%0D%0ALjg1NiwxLjA3MywxMS4yNjNjLTEuNTE4LDEuODM4LTMuNzc3LDIuOTAzLTYuMTYxLDIuOTA1TDEw%0D%0AOS44MDgsMzg4LjExMgoJCXoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOUI2NTk7IiBkPSJNMzY2%0D%0ALjQsMzc3LjEyOGMtNC40MTgtMC4wMDUtNy45OTYtMy41OTEtNy45OTEtOC4wMDljMC4wMDItMi4x%0D%0ANDIsMC44NjQtNC4xOTMsMi4zOTEtNS42OTUKCQljMS44MzItMS44MDgsMy42NC0zLjY0OCw1LjQt%0D%0ANS41MjhjMy4wMDEtMy4yNDMsOC4wNjMtMy40MzksMTEuMzA1LTAuNDM4YzMuMjQzLDMuMDAxLDMu%0D%0ANDM5LDguMDYzLDAuNDM4LDExLjMwNQoJCWMtMC4wMjksMC4wMzEtMC4wNTgsMC4wNjItMC4wODcs%0D%0AMC4wOTJjLTEuOTA0LDIuMDI3LTMuODUxLDQuMDE5LTUuODQsNS45NzZDMzcwLjUxOCwzNzYuMzA1%0D%0ALDM2OC41MDEsMzc3LjEzLDM2Ni40LDM3Ny4xMjh6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRjlC%0D%0ANjU5OyIgZD0iTTc2LjgsMzUzLjA5NmMtMi41NTUsMC4wMDItNC45NTctMS4yMTctNi40NjQtMy4y%0D%0AOGMtMS42NDMtMi4yNTEtMy4yNDMtNC41MzMtNC44LTYuODQ4CgkJYy0yLjQ1OS0zLjY3Mi0xLjQ3%0D%0ANi04LjY0MSwyLjE5Ni0xMS4xYzMuNjcyLTIuNDU5LDguNjQxLTEuNDc2LDExLjEsMi4xOTZjMS40%0D%0AMzUsMi4xMzMsMi45MDcsNC4yMzcsNC40MTYsNi4zMTIKCQljMi42MDcsMy41NjcsMS44MjgsOC41%0D%0ANzItMS43MzksMTEuMTc5Yy0xLjM2OSwxLjAwMS0zLjAyMSwxLjU0LTQuNzE3LDEuNTQxTDc2Ljgs%0D%0AMzUzLjA5NnoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOUI2NTk7IiBkPSJNMzk2LjI4LDMzOS40%0D%0AMjRjLTQuNDE4LTAuMDA0LTcuOTk2LTMuNTktNy45OTItOC4wMDhjMC4wMDEtMS40NTUsMC40LTIu%0D%0AODgyLDEuMTUyLTQuMTI4CgkJYzEuMzI4LTIuMiwyLjYyNC00LjQ0LDMuODY0LTYuNjk2YzIuMTM0%0D%0ALTMuODcsNy4wMDItNS4yNzgsMTAuODcyLTMuMTQ0YzMuODcsMi4xMzQsNS4yNzgsNy4wMDIsMy4x%0D%0ANDQsMTAuODcyCgkJYy0xLjM0OSwyLjQ0My0yLjc0MSw0Ljg0My00LjE3Niw3LjJDNDAxLjcwMiwz%0D%0AMzcuOTM5LDM5OS4wOTYsMzM5LjQyMSwzOTYuMjgsMzM5LjQyNHoiLz4KCTxwYXRoIHN0eWxlPSJm%0D%0AaWxsOiNGOUI2NTk7IiBkPSJNNzYuMzg0LDEyNy41MDRjLTQuNDE4LTAuMDAxLTcuOTk5LTMuNTg0%0D%0ALTcuOTk4LTguMDAyYzAuMDAxLTEuNjgzLDAuNTMyLTMuMzIyLDEuNTE4LTQuNjg2CgkJYzEuNjQz%0D%0ALTIuMjY3LDMuMzI4LTQuNDk2LDUuMDU2LTYuNjg4YzIuODIxLTMuNDAxLDcuODY0LTMuODcxLDEx%0D%0ALjI2NS0xLjA1YzMuMjgyLDIuNzIzLDMuODUyLDcuNTQxLDEuMjk1LDEwLjk1NAoJCWMtMS42LDIu%0D%0AMDI3LTMuMTQ5LDQuMDc3LTQuNjQ4LDYuMTUyQzgxLjM2OCwxMjYuMjY5LDc4Ljk1NCwxMjcuNTA0%0D%0ALDc2LjM4NCwxMjcuNTA0eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0Y5QjY1OTsiIGQ9Ik0zNzYu%0D%0AOTEyLDExNC4wNGMtMi4zMTIsMC4wMDItNC41MTEtMC45OTUtNi4wMzItMi43MzZjLTEuNjg1LTEu%0D%0AOTQxLTMuNDExLTMuODQ1LTUuMTc2LTUuNzEyCgkJYy0yLjk4NC0zLjI1OS0yLjc2MS04LjMxOSww%0D%0ALjQ5OC0xMS4zMDNjMy4xNzgtMi45MSw4LjA5MS0yLjc4LDExLjExLDAuMjk1YzEuOTIsMi4wMzIs%0D%0AMy43OTIsNC4wODgsNS42LDYuMgoJCWMyLjkwMywzLjMzMSwyLjU1Niw4LjM4NC0wLjc3NSwxMS4y%0D%0AODdjLTEuNDU3LDEuMjctMy4zMjQsMS45NjktNS4yNTcsMS45NjlMMzc2LjkxMiwxMTQuMDR6Ii8+%0D%0ACgk8cGF0aCBzdHlsZT0iZmlsbDojRjlCNjU5OyIgZD0iTTEwOS4yNTYsOTIuMzUyYy00LjQxOC0w%0D%0ALjAwMi03Ljk5OC0zLjU4NS03Ljk5Ni04LjAwNGMwLjAwMS0yLjM3MiwxLjA1NS00LjYyMSwyLjg3%0D%0ANi02LjE0CgkJYzIuMTMzLTEuNzgxLDQuMzEyLTMuNTIzLDYuNTM2LTUuMjI0YzMuNTEzLTIuNjg0%0D%0ALDguNTM2LTIuMDEzLDExLjIyLDEuNXMyLjAxMyw4LjUzNi0xLjUsMTEuMjIKCQljLTIuMDQ4LDEu%0D%0ANTYzLTQuMDU2LDMuMTYzLTYuMDI0LDQuOEMxMTIuOTM1LDkxLjcwMywxMTEuMTI0LDkyLjM1Nywx%0D%0AMDkuMjU2LDkyLjM1MnoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGOUI2NTk7IiBkPSJNMzQxLjA2%0D%0ANCw4MS45NjhjLTEuNjI0LTAuMDAyLTMuMjA5LTAuNDk5LTQuNTQ0LTEuNDI0Yy0yLjEzMy0xLjQ2%0D%0AMS00LjI2Ny0yLjg4LTYuNC00LjI1NgoJCWMtMy44MTItMi4yMzQtNS4wOS03LjEzNi0yLjg1Ni0x%0D%0AMC45NDdjMi4yMzQtMy44MTIsNy4xMzYtNS4wOSwxMC45NDctMi44NTZjMC4xNDgsMC4wODcsMC4y%0D%0AOTQsMC4xNzksMC40MzYsMC4yNzUKCQljMi4zNjgsMS40ODgsNC43MDEsMy4wMjksNyw0LjYyNGMz%0D%0ALjYzNiwyLjUxLDQuNTQ5LDcuNDkyLDIuMDQsMTEuMTI4Yy0xLjQ5NSwyLjE2Ni0zLjk2LDMuNDU4%0D%0ALTYuNTkyLDMuNDU2SDM0MS4wNjR6Ii8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRjlCNjU5OyIgZD0i%0D%0ATTE0OS43ODQsNjYuNDQ4Yy00LjQxOC0wLjAyNi03Ljk3OS0zLjYyOS03Ljk1My04LjA0N2MwLjAx%0D%0AOC0zLjA1LDEuNzY4LTUuODI0LDQuNTEzLTcuMTUzCgkJYzIuNTEyLTEuMTg0LDUuMDUxLTIuMzIz%0D%0ALDcuNjE2LTMuNDE2YzQuMDM0LTEuODAzLDguNzY1LDAuMDA1LDEwLjU2OCw0LjAzOGMxLjgwMyw0%0D%0ALjAzNC0wLjAwNSw4Ljc2NS00LjAzOCwxMC41NjgKCQljLTAuMDg4LDAuMDM5LTAuMTc3LDAuMDc3%0D%0ALTAuMjY2LDAuMTEzYy0yLjM2OCwxLjAwOC00LjcwOSwyLjA3NS03LjAyNCwzLjJDMTUyLjEyNiw2%0D%0ANi4yMzIsMTUwLjk2LDY2LjQ3LDE0OS43ODQsNjYuNDQ4eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6%0D%0AI0Y5QjY1OTsiIGQ9Ik0yOTguNCw1OS43ODRjLTAuOTQyLTAuMDAyLTEuODc2LTAuMTY5LTIuNzYt%0D%0AMC40OTZjLTIuNC0wLjg4OC00Ljg1Ni0xLjcyOC03LjMyLTIuNTIKCQljLTQuMTE2LTEuNjA1LTYu%0D%0AMTUyLTYuMjQzLTQuNTQ3LTEwLjM2YzEuNDcxLTMuNzczLDUuNTMtNS44NTIsOS40NTEtNC44NGMy%0D%0ALjY2NywwLjg1Myw1LjMxMiwxLjc2Myw3LjkzNiwyLjcyOAoJCWM0LjE1MywxLjUwNyw2LjI5OCw2%0D%0ALjA5Niw0Ljc5MSwxMC4yNDljLTEuMTUyLDMuMTc1LTQuMTc0LDUuMjg0LTcuNTUxLDUuMjcxTDI5%0D%0AOC40LDU5Ljc4NHoiLz4KPC9nPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNDNERFRUQ7IiBkPSJN%0D%0AMjMyLDEwNGMtNC40MTgsMC04LTMuNTgyLTgtOFY4MGMwLTQuNDE4LDMuNTgyLTgsOC04czgsMy41%0D%0AODIsOCw4djE2CgkJQzI0MCwxMDAuNDE4LDIzNi40MTgsMTA0LDIzMiwxMDR6Ii8+Cgk8cGF0aCBz%0D%0AdHlsZT0iZmlsbDojQzRERUVEOyIgZD0iTTIzMiwyNzJjLTQuNDE4LDAtOC0zLjU4Mi04LTh2LTE2%0D%0AYzAtNC40MTgsMy41ODItOCw4LThzOCwzLjU4Miw4LDh2MTYKCQlDMjQwLDI2OC40MTgsMjM2LjQx%0D%0AOCwyNzIsMjMyLDI3MnoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNDNERFRUQ7IiBkPSJNMjMyLDQ0%0D%0AMGMtNC40MTgsMC04LTMuNTgyLTgtOHYtMTZjMC00LjQxOCwzLjU4Mi04LDgtOHM4LDMuNTgyLDgs%0D%0AOHYxNgoJCUMyNDAsNDM2LjQxOCwyMzYuNDE4LDQ0MCwyMzIsNDQweiIvPgoJPHBhdGggc3R5bGU9%0D%0AImZpbGw6I0M0REVFRDsiIGQ9Ik00MCwyNzJjLTQuNDE4LDAtOC0zLjU4Mi04LTh2LTE2YzAtNC40%0D%0AMTgsMy41ODItOCw4LThzOCwzLjU4Miw4LDh2MTZDNDgsMjY4LjQxOCw0NC40MTgsMjcyLDQwLDI3%0D%0AMgoJCXoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNDNERFRUQ7IiBkPSJNNDI0LDI3MmMtNC40MTgs%0D%0AMC04LTMuNTgyLTgtOHYtMTZjMC00LjQxOCwzLjU4Mi04LDgtOHM4LDMuNTgyLDgsOHYxNgoJCUM0%0D%0AMzIsMjY4LjQxOCw0MjguNDE4LDI3Miw0MjQsMjcyeiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+%0D%0ACjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjxn%0D%0APgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8%0D%0AL2c+Cjwvc3ZnPgo="
              rounded
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default Mainpage;

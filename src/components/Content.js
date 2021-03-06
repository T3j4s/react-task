import { FaShareAlt } from "react-icons/fa";
import tabImage1 from "../images/tab1.jpg";
import tabImage2 from "../images/tab2.jpg";
import tabImage3 from "../images/tab3.jpg";
import html2pdf from "html2pdf.js";

const Content = () => {
  function test1() {
    console.log("Hello World");
  }

  function test() {
    try {
      var element = document.getElementById("nav-tabContent").childNodes;

      var opt = {
        margin: 1,
        filename: "myfile.pdf",
        image: { type: "jpeg", quality: 0.95 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      let doc = html2pdf().set(opt).from(element[0]).toPdf();
      for (let j = 1; j < element.length; j++) {
        doc = doc
          .get("pdf")
          .then((pdf) => {
            pdf.addPage();
          })
          .from(element[j])
          .toPdf();
      }
      doc.save();
    } catch (err) {
      alert("something wrong - please refresh the page and try again");
    }
  }

  return (
    <div>
      <nav>
        <div className="nav nav-tabs nav-justified" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-tab1-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-tab1"
            type="button"
            role="tab"
            aria-controls="nav-tab1"
            aria-selected="true"
          >
            Analysis Tab 1
          </button>
          <button
            className="nav-link"
            id="nav-tab2-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-tab2"
            type="button"
            role="tab"
            aria-controls="nav-tab2"
            aria-selected="false"
          >
            Analysis Tab 2
          </button>
          <button
            className="nav-link"
            id="nav-tab3-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-tab3"
            type="button"
            role="tab"
            aria-controls="nav-tab3"
            aria-selected="false"
          >
            Analysis Tab 3
          </button>
        </div>
      </nav>

      <div className="container-fluid py-1 bg-light">
        <button className="btn btn-dark me-2" onClick={test1}>
          <FaShareAlt />
        </button>
        <button className="btn btn-dark" id="test" onClick={test}>
          PDF
        </button>
      </div>

      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-tab1"
          role="tabpanel"
          aria-labelledby="nav-tab1-tab"
        >
          <div className="col-12">
            <img src={tabImage1} alt="Image 1" />
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-tab2"
          role="tabpanel"
          aria-labelledby="nav-tab2-tab"
        >
          <div className="col-12">
            <img src={tabImage2} alt="Image 2" />
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-tab3"
          role="tabpanel"
          aria-labelledby="nav-tab3-tab"
        >
          <div className="col-12">
            <img src={tabImage3} alt="Image 3" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;

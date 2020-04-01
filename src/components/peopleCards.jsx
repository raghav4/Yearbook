import React from 'react';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';

const PeopleCards = () => {
  return (
    <>
      <div className="ml-5 mr-5 mt-5 mb-5 active-cyan-3 active-cyan-4">
        {/* <p className="p-responsive mt-3 mb-2 text-left">
          <SearchIcon className="mr-1" />
          Search People
        </p> */}
        <input
          className="form-control"
          type="text"
          placeholder="Search People"
          aria-label="Search"
        />
        {/* <p className="p-responsive mt-3 mb-2 text-left">
          <FilterListIcon className="mr-1" />
          Filter People
        </p> */}
        <div className="row mt-3 mb-2">
          <div className="col">
            {/* TODO: Remove the duplicacy of the code */}
            <select className="custom-select custom-select-md">
              <option value="" disabled selected>
                Choose the Department
              </option>
              <option value="1">ALL</option>
              <option value="2">CSE</option>
              <option value="3">Option 3</option>
            </select>
          </div>
          <div className="col">
            <select className="custom-select custom-select-md">
              <option value="" disabled selected>
                Choose the Section
              </option>
              <option value="1">ALL</option>
              <option value="2">A</option>
              <option value="3">B</option>
              <option value="3">C</option>
            </select>
          </div>
        </div>
      </div>
      <div className="card-deck ml-4 mr-4 mt-5 mb-5">
        <div className="card mb-4">
          <div className="view overlay">
            <a href="#!">
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title text-center">John Doe</h4>
            <div className="view overlay mb-3">
              {/* <img
                className="rounded-circle col-md-6"
                alt="50x50"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                data-holder-rendered="true"
              /> */}
              <img
                className="card-img-top img-fluid z-depth-1"
                src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                alt="Card  cap"
              />
              {/* <a href="#!">
                <div className="mask rgba-white-slight"></div>
              </a> */}
            </div>
            <p className="card-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut,
              quibusdam. Illum, earum nostrum animi minus eos suscipit tempore
              similique accusantium consequatur beatae corrupti voluptatum,
              consectetur maxime provident alias culpa quia.
            </p>
            {/* <button type="button" className="btn btn-light-blue btn-md">
              Read more
            </button> */}
          </div>
        </div>
        <div className="card mb-4">
          <div className="view overlay">
            <a href="#!">
              <div className="mask rgba-white-slight" />
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button type="button" className="btn btn-light-blue btn-md">
              Read more
            </button>
          </div>
        </div>
        <div className="card mb-4">
          <div className="view overlay">
            <a href="#!">
              <div className="mask rgba-white-slight" />
            </a>
          </div>

          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button type="button" className="btn btn-light-blue btn-md">
              Read more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleCards;

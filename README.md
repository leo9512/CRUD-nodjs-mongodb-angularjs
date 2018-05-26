# AngularJs,  Node.js & MongoDB 

## RESTful API example:

----------------------------------------------------------
#### Create book 

`POST`  - `#/api/books`

For example: http://localhost:3000/api/books

#### Request body
	{
	    "title" : "The notebook",
	    "genre": "Romance",
	    "description": "Set amid the austere beauty of coastal North Carolina in 1946, The Notebook begins with the story of Noah Calhoun, a rural Southerner returned home from World War II. ",
	    "author": "Nicholas Spart",
	    "publisher": "Foobar",
	    "pages": "900",
	    "image_url": "http://ecx.images-amazon.com/images/I/51q0fjsL61L._SX314_BO1,204,203,200_.jpg",
	    "buy_url": "http://www.barnesandnoble.com/w/notebook-nicholas-sparks/1100298896?ean=9781455582877"
	}
	
#### Response
		{
			  "__v": 0,
			  "title": "The notebook",
			  "genre": "Romance",
			  "description": "Set amid the austere beauty of coastal North Carolina in 1946, The Notebook begins with the story of Noah Calhoun, a rural Southerner returned home from World War II. ",
			  "author": "Nicholas Spart",
			  "publisher": "Foobar",
			  "pages": "900",
			  "image_url": "http://ecx.images-amazon.com/images/I/51q0fjsL61L._SX314_BO1,204,203,200_.jpg",
			  "buy_url": "http://www.barnesandnoble.com/w/notebook-nicholas-sparks/1100298896?ean=9781455582877",
			  "_id": "56e84a4b1b253b2401bf0cac",
			  "create_date": "2016-03-15T17:45:47.793Z"
		}
		
		
----------------------------------------------------------
#### Read books

`GET`  - `#/books`

For example: http://localhost:3000/api/books

#### Response

    [
	    {
		    _id: "56e71e66f2a13d52e19fa5cc",
		    title: "Truth or die",
		    genre: "Suspense",
		    description: "After a serious professional stumble, attorney Trevor Mann may have finally hit his stride. He's found happiness with his girlfriend Claire Parker, a beautiful, ambitious journalist always on the hunt for a scoop.",
		    author: "James Patterson",
		    publisher: "Brown & Company",
		    pages: "480",
		    image_url: "http://prodimage.images-bn.com/pimages/9780316407014_p0_v3_s192x300.jpg",
		    buy_url: "http://www.barnesandnoble.com/w/truth-or-die-james-patterson/1120509003?ean=9780316407014",
		    create_date: "2016-03-15T17:24:55.319Z"
	    },
	    {
		    _id: "56e72eb50e7cc1fc0215863e",
		    title: "The notebook",
		    genre: "Romance",
		    description: "After a serious professional stumble, attorney Trevor Mann may have finally hit his stride. He's found happiness with his girlfriend Claire Parker, a beautiful, ambitious journalist always on the hunt for a scoop.",
		    author: "James Patterson",
		    publisher: "Brown & Company",
		    pages: "480",
		    buy_url: "http://www.barnesandnoble.com/w/notebook-nicholas-sparks/1100298896?ean=9781455582877",
		    __v: 0,
		    image_url: "http://prodimage.images-bn.com/pimages/9781455582877_p0_v2_s192x300.jpg",
		    create_date: "2016-03-14T21:35:49.368Z"
	    }
    ]


![Books](http://i.imgur.com/I8D99G1.png?1)

---------------------------------------------------------------

#### Read book by id 

`GET`  - `#/api/books/:id`

For example: http://localhost:3000/api/books/56e72eb50e7cc1fc0215863e

#### Response

    {
	      "_id": "56e72eb50e7cc1fc0215863e",
	      "title": "The notebook",
	      "genre": "Romance",
	      "description": "After a serious professional stumble, attorney Trevor Mann may have finally hit his stride. He's found happiness with his girlfriend Claire Parker, a beautiful, ambitious journalist always on the hunt for a scoop.",
	      "author": "James Patterson",
	      "publisher": "Brown & Company",
	      "pages": "480",
	      "buy_url": "http://www.barnesandnoble.com/w/notebook-nicholas-sparks/1100298896?ean=9781455582877",
	      "__v": 0,
	      "image_url": "http://prodimage.images-bn.com/pimages/9781455582877_p0_v2_s192x300.jpg",
	      "create_date": "2016-03-14T21:35:49.368Z"
    }
    
---------------------------------------------------------------

    
#### Update book by id 

`PUT`  - `#/api/books/:id`

For example: http://localhost:3000/api/books/56e72eb50e7cc1fc0215863e

#### Request body
    {
    	  "_id": "56e72eb50e7cc1fc0215863e",
    	  "title": "The notebook",
    	  "genre": "Romance",
    	  "description": "After a serious professional stumble, attorney Trevor Mann may have finally hit his stride. He's found happiness with his girlfriend Claire Parker, a beautiful, ambitious journalist always on the hunt for a scoop.",
    	  "author": "James Patterson",
    	  "publisher": "Brown & Company",
    	  "pages": "480",
    	  "buy_url": "http://www.barnesandnoble.com/w/notebook-nicholas-sparks/1100298896?ean=9781455582877",
    	  "__v": 0,
    	  "image_url": "http://prodimage.images-bn.com/pimages/9781455582877_p0_v2_s192x300.jpg",
    	  "create_date": "2016-03-14T21:35:49.368Z"
    }
![Edit form](http://i.imgur.com/gcKlxVm.png?1)

---------------------------------------------------------------


#### Delete book by id 

`DELETE`  - `#/api/books/:id`

For example: http://localhost:3000/api/books/56e72eb50e7cc1fc0215863e

#### Response

		{
		  "ok": 1,
		  "n": 1
		}

---------------------------------------------------------------

package schema

// Profile corresponds to the 'profiles' table in the database
type Profile struct {
	ID   int    `json:"id"`   // ID is auto-incremented
	Name string `json:"name"` // Name of the profile
}

// History corresponds to the 'histories' table in the database
type History struct {
	ID         int       `json:"id"`          // ID is auto-incremented
	ProfileID  int       `json:"profile_id"`  // Foreign key from 'profiles'
	EventName  string    `json:"event_name"`  // Name of the event
	Tag        string    `json:"tag"`         // Tag associated with the event
	ImgPath    string    `json:"img_path"`    // Image path for the event
	MakeTime   string `json:"make_time"`   // Time the event was made (assuming datetime type)
	Contents   string    `json:"contents"`    // Text contents describing the event
}

// About corresponds to the 'about' table in the database
type About struct {
	ID        int    `json:"id"`         // ID is auto-incremented
	ProfileID int    `json:"profile_id"` // Foreign key from 'profiles'
	Title     string `json:"title"`      // Title of the about section
	Markdown  string `json:"markdown"`   // Markdown content of the about section
}

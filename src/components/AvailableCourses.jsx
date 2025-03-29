import React, { useState } from "react";
import { Card, CardContent, Typography, Grid, Button, Collapse, TextField } from "@mui/material";
import courseDetails from "../data/courseDetails"; // Importing course data

const AvailableCourses = () => {
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Search state

  const handleExpand = (courseName) => {
    setExpandedCourse(expandedCourse === courseName ? null : courseName);
  };

  // Filter courses based on search query
  const filteredCourses = Object.entries(courseDetails).filter(([courseName]) =>
    courseName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      {/* Search Bar */}
      <TextField
        label="Search Courses"
        variant="outlined"
        fullWidth
        sx={{ mb: 3 }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Grid container spacing={3}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map(([courseName, details]) => (
            <Grid item xs={12} sm={6} md={4} key={courseName}>
              <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {courseName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {details.description}
                  </Typography>
                  <Collapse in={expandedCourse === courseName}>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      <b>Eligibility:</b> {details.eligibility}
                      <br />
                      <b>Duration:</b> {details.duration}
                      <br />
                      <b>Career Prospects:</b> {details.careerProspects}
                      <br />
                      <b>Government College Cutoff:</b>{" "}
                      {details.government_college_cutoff
                        ? `${details.government_college_cutoff.min} - ${details.government_college_cutoff.max}`
                        : "N/A"}
                      <br />
                      <b>Private College Cutoff:</b>{" "}
                      {details.private_college_cutoff
                        ? `${details.private_college_cutoff.min} - ${details.private_college_cutoff.max}`
                        : "N/A"}
                    </Typography>
                    {details.source && (
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        <a href={details.source} target="_blank" rel="noopener noreferrer">
                          More details
                        </a>
                      </Typography>
                    )}
                  </Collapse>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ mt: 2 }}
                    onClick={() => handleExpand(courseName)}
                  >
                    {expandedCourse === courseName ? "Show Less" : "Learn More"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ mt: 2, color: "gray", textAlign: "center", width: "100%" }}>
            No matching courses found.
          </Typography>
        )}
      </Grid>
    </div>
  );
};

export default AvailableCourses;

$('#container').width(screen.availWidth);
$('#container').height(screen.availHeight);
var BUBBLE_PARAMETERS = {
    "data_file": "data_shrink.csv",
    "map_file": "us.json",
    "report_title": "Suicide Investigation",
    "width": screen.availWidth,
    "height": screen.availHeight,
    "force_strength": 0.03,
    "force_type": "charge",
    "radius_field": "suicides_no",
    "numeric_fields":[ "gdp_per_capita ($)","suicides_no"],
    "fill_color": {
        "data_field": "region",
        "color_groups": {
            "Africa": "#346c9c",
            "Asia": "#f43e06",
            "Europe": "#12a182",
            "North America": "#eb3c70",
            "Oceania": "#bec936",
            "South America": "#82111f"
        }
    },
    "tooltip": [
        {"title": "Region", "data_field": "region"},
        {"title": "Country", "data_field": "country"},
        {"title": "Gender", "data_field": "sex"},
        {"title": "Age", "data_field": "age"},
        {"title": "Suicide Number", "data_field": "suicides_no", "format_string": ",.2r"},
        {"title": "Generation", "data_field": "generation"},
        {"title": "GDP Per Capita", "data_field": "gdp_per_capita ($)", "format_string": ",.2r"}
    ],
    "modes": [
        {
            "button_text": "Overview",
            "button_id": "all",
            "type": "grid",
            "labels": null,
            "grid_dimensions": {"rows": 1, "columns": 1},
            "data_field": null
        },
        {
            "button_text": "Age",
            "button_id": "region",
            "type": "grid",
            "labels": ["5-14 years","15-24 years", "25-34 years", "35-54 years", "55-74 years", "75+ years"],
            "grid_dimensions": {"rows": 3, "columns": 3},
            "data_field": "age"
        },
        {
            "button_text": "Sex",
            "button_id": "Change",
            "type": "grid",
            "labels": ["female", "male"],
            "grid_dimensions": {"rows": 1, "columns": 3},
            "data_field": "sex"
        },
        {
            "button_text": "Region",
            "button_id": "region2",
            "type": "grid",
            "labels": ["Africa", "Asia","Europe","North America","Oceania","South America"],
            "grid_dimensions": {"rows": 3, "columns": 3},
            "data_field": "region"
        },
        {
            "button_text": "Generation",
            "button_id": "generation",
            "type": "grid",
            "labels": ["Generation X", "Boomers","Silent","Millenials","Generation Z"],
            "grid_dimensions": {"rows": 3, "columns": 3},
            "data_field": "generation"
        },
        {
            "button_text": "GDP",
            "button_id": "gdp-no",
            "type": "scatterplot",
            "x_data_field": "gdp_per_capita ($)",
            "y_data_field": "suicides_no",
            "x_format_string": ",.2r",
            "y_format_string": ",.2r"
        }
    ]
};
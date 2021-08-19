function buildCharts(sample) {
      d3.json("samples.json").then((data) => {
      var sample= data.samples;
      
      var resultsarray= md.filter(sampleobject => 
      sampleobject.id == sample);
      
      var result= resultsarray[0]
      var ids = result.otu_ids;
      var labels = result.otu_labels;
      var values = result.sample_values;
      });
}
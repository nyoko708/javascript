
/**
 * アイスクリームデータ
 */
var icecreamModel = {
  list: [
      { id: "t1", name: "バニラ" },
      { id: "t2", name: "チョコ" },
      { id: "t3", name: "ストロベリー" },
      { id: "t4", name: "抹茶" },
  ],

  getAll: function() {
    return this.list;
  },

  findById: function(id) {
    return $.grep(this.list, function(val) {
            return id = val.id;
           })[0];
  }
};

/**
 * アイスクリームを選択処理
 */
var selectionModel = {
  list:[],

  icecreamNumber: 2,

  add: function(item) {
    var list = this.list;
    list.push(item);
    if(list.length > this.icecreamNumber) {
      list.shift();
    }
    this.updateView();
  },

  contain: function(icecream) {
    return this.list.indexOf(icecream) >= 0;
  },

  containById: function(id) {
    return this.contain(icecreamModel.findById(id));
  },

  getIcecreams: function() {
    this.list;
  },

  updateView: function() {
    updateSelection();
    updateIcecreamList();
  },
};

// メイン処理
$(function() {
  var els = $("#icecreams");
  $.each(icecreamModel.getAll(), function(i, icecream) {
    els.append(
      $("<li>")
        .append($("<input type='checkbox'>")
          .attr('name', icecream.id))
          .append($("<span>").text(icecream.name))
        .click(function(event) {
          onclickIcecream(event);
        })
    );
  }
  );
  selectionModel.updateView();
});

function updateSelection() {
 $('#icecreams input[type="checkbox"]').each(function(i, elm) {
   elm.checked = selectionModel.containById( elm.name );
 });
}

function updateIcecreamList() {
  $("#icecream-list").text(
    $.map(selectionModel.getIcecreams(), function(val) {
      return val.name;
    }).join(" > ")
  );
}

function onclickIcecream(event) {
  var checkbox = $(event.currentTarget).find("input[type='checkbox']");
  if(checkbox) {
    selectionModel.add(
        icecreamModel.findById(checkbox.attr("name")));
  }
}

define(['handlebars'], function(Handlebars) {

this["hbs"] = this["hbs"] || {};

this["hbs"]["assets/templates/footer.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n\n    <div class=\"large-4 columns about\">\n\n      <p>Slotr is about scheduling.</p>\n\n      <ul class=\"inline-list social-list\">\n        <li>Follow Us</li>\n        <li><a href=\"https://twitter.com/slotr\" target=\"_blank\"><i class=\"icon icon-twitter\"></i></a></li>\n      </ul>\n\n    </div><!-- /.large-4.columns -->\n\n    <div class=\"large-8 columns\">\n    </div><!-- /.large-8.columns -->\n";
  },"useData":true});



this["hbs"]["assets/templates/header.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "      <li class=\""
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\n        <a class=\"navigate\" href=\""
    + escapeExpression(lambda((depth0 != null ? depth0.path : depth0), depth0))
    + "\">"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</a>\n      </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n<div class=\"sticky\">\n\n  <h1>\n    <a href=\"/\" class=\"navigate\">\n    </a>\n  </h1>\n\n  <ul class=\"side-nav text-right\">\n\n";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1.app_settings : stack1)) != null ? stack1.navigation : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n  </ul>\n\n</div>\n";
},"useData":true});



this["hbs"]["assets/templates/layouts/auth.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "\n\n  <div id=\"page\" class=\"container\">\n\n    <div class=\"row\">\n\n      <div class=\"large-3 medium-4 small-7 columns large-centered medium-centered small-centered logo-wrapper\">\n        <img src=\"/images/svg/logo-dark.svg\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1.site_name : stack1), depth0))
    + "\" width=\"2001\" height=\"417\" />\n      </div>\n\n    </div><!-- /.row -->\n\n    <div class=\"row\">\n\n      <div id=\"auth-form\" class=\"large-6 columns large-centered\"></div>\n\n    </div><!-- /.row -->\n\n  </div><!-- /#auth.container -->\n\n  <div id=\"loading\" class=\"container\"></div>\n";
},"useData":true});



this["hbs"]["assets/templates/layouts/default.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "          <li class=\""
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\n            <a class=\"navigate\" href=\""
    + escapeExpression(lambda((depth0 != null ? depth0.path : depth0), depth0))
    + "\">"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</a>\n          </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"off-canvas-wrap\" data-offcanvas>\n  \n  <div class=\"inner-wrap\">\n    \n    <nav class=\"tab-bar hide-for-large-up\">\n      <section class=\"middle tab-bar-section\">\n        <a href=\"/\" class=\"navigate logo\">\n        </a>\n      </section>\n\n      <section class=\"right-small\">\n        <a class=\"right-off-canvas-toggle menu-icon\" href=\"#\"><span></span></a>\n      </section>\n    </nav>\n    \n    <div class=\"main-section\">\n      \n      <div class=\"row\">\n\n        <div id=\"header\" class=\"large-2 columns show-for-large-up\"></div>\n        \n        <div class=\"large-10 columns\">\n          <div id=\"page\" class=\"container row\">\n            <div id=\"content\" class=\"large-12 medium-12 columns\"></div>\n          </div>\n        </div>\n\n      </div><!-- /.row -->\n    </div><!-- /.main-section -->\n    \n\n    <div id=\"loading\" class=\"container\"></div>\n    \n    <aside class=\"right-off-canvas-menu\">\n      <ul class=\"off-canvas-list\">\n";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.config : depth0)) != null ? stack1.app_settings : stack1)) != null ? stack1.navigation : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "      </ul>\n    </aside>\n\n  </div>\n\n</div>\n";
},"useData":true});



this["hbs"]["assets/templates/modules/account/api.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <div class=\"row\">\n              <div class=\"small-12 columns\">\n                <div data-alert class=\"alert-box "
    + escapeExpression(lambda((depth0 != null ? depth0.kind : depth0), depth0))
    + " radius\">\n                  "
    + escapeExpression(lambda((depth0 != null ? depth0.message : depth0), depth0))
    + "\n                  <a href=\"#\" class=\"close\">&times;</a>\n                </div>\n              </div>\n            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n\n<div class=\"large-12 columns option-group\">\n  <h4>API Access</h4>\n  <hr>\n\n\n  <form>\n    <div class=\"row\">\n\n        <div class=\"large-2 columns\">\n          <label for=\"clientid\" class=\"right inline\">Client ID</label>\n        </div>\n\n        <div class=\"large-10 columns\">\n          <input type=\"text\" name=\"clientid\" value=\""
    + escapeExpression(((helper = (helper = helpers.clientid || (depth0 != null ? depth0.clientid : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"clientid","hash":{},"data":data}) : helper)))
    + "\" readonly>\n        </div>\n\n    </div>\n    <div class=\"row\">\n\n        <div class=\"large-2 columns\">\n          <label for=\"apikey\" class=\"right inline\">API Key</label>\n        </div>\n\n        <div class=\"large-10 columns\">\n          <input type=\"text\" id=\"apikey\" name=\"apikey\" placeholder=\"\" value=\""
    + escapeExpression(((helper = (helper = helpers.apikey || (depth0 != null ? depth0.apikey : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"apikey","hash":{},"data":data}) : helper)))
    + "\" readonly>\n        </div>\n\n    </div>\n    <div class=\"row\">\n\n        <div class=\"large-10 large-offset-2 columns\">\n        \n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.messages : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n          <button class=\"button radius\">New API Key</button>\n\n        </div>\n\n    </div>\n\n  </form>\n</div>\n";
},"useData":true});



this["hbs"]["assets/templates/modules/account/billing.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "\n      <div class=\"large-4 columns ";
  stack1 = ((helpers.if_eq || (depth0 && depth0.if_eq) || helperMissing).call(depth0, (data && data.index), {"name":"if_eq","hash":{
    'compare': ((depths[1] != null ? depths[1].plan : depths[1]))
  },"fn":this.program(2, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\" data-equalizer-watch>\n\n        <ul class=\"pricing-table\">\n\n          <li class=\"title\">"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</li>\n          <li class=\"price\">"
    + escapeExpression(lambda((depth0 != null ? depth0.price : depth0), depth0))
    + "</li>\n          <li class=\"description\">"
    + escapeExpression(lambda((depth0 != null ? depth0.description : depth0), depth0))
    + "</li>\n          \n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.features : depth0), {"name":"each","hash":{},"fn":this.program(4, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depths[1] != null ? depths[1].locals : depths[1])) != null ? stack1.paid : stack1), {"name":"if","hash":{},"fn":this.program(9, data, depths),"inverse":this.program(14, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n        </ul>\n\n      </div><!-- /.large-4.columns -->\n";
},"2":function(depth0,helpers,partials,data) {
  return "current-plan";
  },"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "            <li class=\"bullet-item\">\n              ";
  stack1 = helpers.unless.call(depth0, (data && data.index), {"name":"unless","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n                "
    + escapeExpression(lambda(depth0, depth0))
    + "\n              ";
  stack1 = helpers.unless.call(depth0, (data && data.index), {"name":"unless","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n            </li>\n";
},"5":function(depth0,helpers,partials,data) {
  return "<strong>";
  },"7":function(depth0,helpers,partials,data) {
  return "</strong>";
  },"9":function(depth0,helpers,partials,data,depths) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "\n";
  stack1 = ((helpers.unless_eq || (depth0 && depth0.unless_eq) || helperMissing).call(depth0, (data && data.index), {"name":"unless_eq","hash":{
    'compare': ((depths[2] != null ? depths[2].plan : depths[2]))
  },"fn":this.program(10, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  stack1 = ((helpers.if_eq || (depth0 && depth0.if_eq) || helperMissing).call(depth0, (data && data.index), {"name":"if_eq","hash":{
    'compare': ((depths[2] != null ? depths[2].plan : depths[2]))
  },"fn":this.program(12, data, depths),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"10":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "              <li class=\"cta-button\">\n                <a class=\"button upgrade radius\"\n                  href=\"#\"\n                  data-category=\"Change Plan Button\"\n                  data-action=\"Click\"\n                  data-label=\"Pricing Table: "
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\n                  data-plan=\""
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n                    Select Plan\n                </a>\n              </li>\n";
},"12":function(depth0,helpers,partials,data) {
  return "              <li class=\"cta-button\">\n                <b>Current Plan</b>\n              </li>\n";
  },"14":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depths[2] != null ? depths[2].locals : depths[2])) != null ? stack1.trialexpired : stack1), {"name":"if","hash":{},"fn":this.program(15, data, depths),"inverse":this.program(20, data, depths),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"15":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "\n";
  stack1 = ((helpers.if_eq || (depth0 && depth0.if_eq) || helperMissing).call(depth0, (data && data.index), {"name":"if_eq","hash":{
    'compare': (0)
  },"fn":this.program(16, data),"inverse":this.program(18, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"16":function(depth0,helpers,partials,data) {
  return "                <li class=\"cta-button\">\n                  <b>Current Plan</b>\n                </li>\n";
  },"18":function(depth0,helpers,partials,data) {
  return "                <li class=\"cta-button\">\n                  Credit Card Required\n                </li>\n";
  },"20":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "\n";
  stack1 = ((helpers.if_eq || (depth0 && depth0.if_eq) || helperMissing).call(depth0, (data && data.index), {"name":"if_eq","hash":{
    'compare': (2)
  },"fn":this.program(21, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"21":function(depth0,helpers,partials,data) {
  return "                <li class=\"cta-button\">\n                  <b>Trial Plan</b>\n                </li>\n";
  },"23":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "  <div class=\"row\">\n    <div class=\"small-12 columns\">\n      <div data-alert class=\"alert-box success radius\">\n        Your Business plan trial ends on "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.trialendstring : stack1), depth0))
    + ".\n          After that, you'll be on the Free plan if you haven't\n          added a credit card.\n      </div>\n    </div>\n  </div>\n";
},"25":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "    <div class=\"row\">\n      <div class=\"small-12 columns\">\n        <div data-alert class=\"alert-box "
    + escapeExpression(lambda((depth0 != null ? depth0.kind : depth0), depth0))
    + " radius\">\n          "
    + escapeExpression(lambda((depth0 != null ? depth0.message : depth0), depth0))
    + "\n          <a href=\"#\" class=\"close\">&times;</a>\n        </div>\n      </div>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "\n<div class=\"large-12 columns option-group\">\n\n  <div class=\"row\">\n    <div class=\"small-12 columns\">\n      <a href=\"#\" class=\"button upgrade-billing radius right\">Update Credit Card</a>\n    </div>\n  </div>\n\n  <div class=\"row\" data-equalizer>\n\n";
  stack1 = helpers.each.call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.config : stack1)) != null ? stack1.plans : stack1), {"name":"each","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n  </div>\n\n";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.trialexpired : stack1), {"name":"unless","hash":{},"fn":this.program(23, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.messages : stack1), {"name":"each","hash":{},"fn":this.program(25, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</div>\n";
},"useData":true,"useDepths":true});



this["hbs"]["assets/templates/modules/account/password.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <div class=\"row\">\n              <div class=\"small-12 columns\">\n                <div data-alert class=\"alert-box "
    + escapeExpression(lambda((depth0 != null ? depth0.kind : depth0), depth0))
    + " radius\">\n                  "
    + escapeExpression(lambda((depth0 != null ? depth0.message : depth0), depth0))
    + "\n                  <a href=\"#\" class=\"close\">&times;</a>\n                </div>\n              </div>\n            </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n\n<div class=\"large-12 columns option-group\">\n  <h4>Password</h4>\n  <hr>\n\n  <form data-abide>\n    <div class=\"row\">\n\n        <div class=\"large-2 columns\">\n          <label for=\"email\" class=\"right inline\">Email</label>\n        </div>\n\n        <div class=\"large-10 columns\">\n          <input type=\"text\" id=\"email\" name=\"email\" placeholder=\"\" value=\""
    + escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"email","hash":{},"data":data}) : helper)))
    + "\" disabled>\n        </div>\n\n    </div>\n    <div class=\"row\">\n\n        <div class=\"large-2 columns\">\n          <label for=\"curpasswd\" class=\"right inline\">Current Password</label>\n        </div>\n\n        <div class=\"large-10 columns\">\n          <input type=\"password\" id=\"curpasswd\" name=\"curpasswd\" placeholder=\"\" placeholder=\"\" required>\n          <small class=\"error\">Required.</small>\n        </div>\n\n    </div>\n    <div class=\"row\">\n\n        <div class=\"large-2 columns\">\n          <label for=\"newpasswd\" class=\"right inline\">New Password</label>\n        </div>\n\n        <div class=\"large-10 columns\">\n          <input type=\"password\" id=\"newpasswd\" name=\"newpasswd\" placeholder=\"\" required>\n          <small class=\"error\">Passwords must be at least 8 characters.</small>\n        </div>\n\n    </div>\n    <div class=\"row\">\n\n        <div class=\"large-2 columns\">\n          <label for=\"newpasswd-repeat\" class=\"right inline\">Repeat New Password</label>\n        </div>\n\n        <div class=\"large-10 columns\">\n          <input type=\"password\" id=\"newpasswd-repeat\" name=\"newpasswd-repeat\" placeholder=\"\" required data-equalto=\"newpasswd\">\n          <small class=\"error\">Passwords must match.</small>\n        </div>\n\n    </div>\n    <div class=\"row\">\n\n        <div class=\"large-10 large-offset-2 columns\">\n        \n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.messages : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "          \n          <button class=\"button radius\">Update</button>\n        </div>\n\n    </div>\n\n  </form>\n</div>\n";
},"useData":true});



this["hbs"]["assets/templates/modules/account/preferences.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "checked";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n<form>\n\n  <div class=\"large-12 columns option-group\">\n    <h4>Preferences</h4>\n    <hr>\n  </div>\n\n  <div class=\"large-12 columns option\">\n    <div class=\"switch round large\">\n      <input id=\"notifications\" name=\"notifications[active]\" type=\"checkbox\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.prefs : depth0)) != null ? stack1.notifications : stack1)) != null ? stack1.active : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n      <label for=\"notifications\"></label>\n    </div> \n    <h4>Notifications</h4>\n  </div>\n\n</form>\n";
},"useData":true});



this["hbs"]["assets/templates/modules/auth/login.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "  <div class=\"row\">\n    <div class=\"small-12 columns\">\n      <div data-alert class=\"alert-box warning radius\">\n        "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.error : stack1), depth0))
    + "\n        <a href=\"#\" class=\"close\">&times;</a>\n      </div>\n    </div>\n  </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"heading\">\n  <h2>Login</h2>\n</div>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.error : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n<form>\n\n  <div class=\"row\">\n\n    <div class=\"large-12 columns\">\n      <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Email\" value=\""
    + escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"email","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n\n  </div><!-- /.row -->\n\n  <div class=\"row\">\n\n    <div class=\"large-12 columns\">\n      <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\">\n    </div>\n\n  </div><!-- /.row -->\n\n  <div class=\"row\">\n\n    <div class=\"large-12 columns button-wrapper\">\n      <button class=\"button radius\">Log In</button>\n      <a href=\"/signup\" class=\"navigate\">or Sign Up</a>\n    </div>\n\n  </div><!-- /.row -->\n\n</form>\n";
},"useData":true});



this["hbs"]["assets/templates/modules/auth/register.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "  <div class=\"row\">\n    <div class=\"small-12 columns\">\n      <div data-alert class=\"alert-box warning radius\">\n        "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.error : stack1), depth0))
    + "\n        <a href=\"#\" class=\"close\">&times;</a>\n      </div>\n    </div>\n  </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"heading\">\n  <h2>Sign Up</h2>\n</div>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.error : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n<form>\n\n  <div class=\"row\">\n\n    <div class=\"large-12 columns\">\n      <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Email\" value=\""
    + escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"email","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n\n  </div><!-- /.row -->\n\n  <div class=\"row\">\n\n    <div class=\"large-12 columns\">\n      <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\" value=\""
    + escapeExpression(((helper = (helper = helpers.password || (depth0 != null ? depth0.password : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"password","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n\n  </div><!-- /.row -->\n\n  <div class=\"row\">\n\n    <div class=\"large-12 columns\">\n      <p class=\"agreetos\">By signing up, you agree to the\n          <a href=\"https://serverpilot.io/tos.html\" target=\"_new\">Terms of Service</a>.</p>\n    </div>\n\n  </div><!-- /.row -->\n\n  <div class=\"row\">\n\n    <div class=\"large-12 columns button-wrapper\">\n      <input type=\"hidden\" name=\"plan\" value=\"0\">\n      <button class=\"button radius\">Sign Up</button>\n      <a href=\"/login\" class=\"navigate\">or Log In</a>\n    </div>\n\n  </div><!-- /.row -->\n\n</form>\n";
},"useData":true});



this["hbs"]["assets/templates/modules/home/home.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<div class=\"large-12 columns text-center\">\n  <h2>Welcome! Connect your first server now.</h2>\n\n  <p class=\"instructions\">Spin up a server at your favorite provider,\n      connect it to ServerPilot, and we'll install everything you need to\n      host PHP apps like WordPress.</p>\n\n  <p><a href=\"/servers/new\" class=\"navigate button radius\">Connect a Server</a></p>\n</div>\n";
  },"useData":true});



this["hbs"]["assets/templates/modules/loading.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<!-- LOADING ANIMATION -->\n<div class=\"loading-overlay\">\n  <div class=\"progress large-4 centered alert round\">\n    <span class=\"meter\" style=\"width: 4%\">\n      \n    </span>\n  </div>\n</div>\n";
  },"useData":true});



this["hbs"]["assets/templates/modules/meeting/apps-list-item.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n\n<p><a href=\"/apps/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"navigate\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a></p>\n";
},"useData":true});



this["hbs"]["assets/templates/modules/meeting/apps.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <a href=\"/apps/new/s/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"button radius right navigate\"><i class=\"icon icon-plus\"></i> New App</a>\n\n    <h4>Apps</h4>\n    <hr>\n\n    <div class=\"apps-list\">\n      <ul class=\"no-bullet\"></ul>\n    </div>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.creation_action_error : depth0), {"name":"unless","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <div class=\"large-12 columns text-center no-apps\">\n      <h4>Great, you're ready to create your first app on this server.</h4>\n\n      <a href=\"/apps/new/s/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"button radius text-center navigate\"><i class=\"icon icon-plus\"></i> New App</a>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"large-12 columns option-group\">\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.has_apps : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</div>\n\n";
},"useData":true});



this["hbs"]["assets/templates/modules/meeting/connect.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "\n  <div class=\"large-12 columns option\">\n\n    <h4>It looks like you never ran the installer for this server.</h4>\n    <p>You should probably just delete this server and <a href=\"/servers/new\" class=\"navigate\">connect a new server.</a></p>\n    <p><a href=\"#\" class=\"delete-server button radius small alert\">Delete</a></p>\n\n  </div>\n\n";
  },"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n  <div class=\"large-12 columns option server-connect-instructions\">\n\n    <h4>Remember, this must be a new server running 64-bit Ubuntu 12.04 or 14.04.</h4>\n    <p>ServerPilot will install Nginx, Apache, PHP, and MySQL.<br>You can just sit back and relax.</p>\n    \n    <div class=\"panel callout radius\">\n\n      <p>To connect this server, you need to run the ServerPilot installer. Log in to your server and run the following:</p>\n      \n      <textarea rows=\"5\" readonly>\n(test -e /usr/bin/wget || (sudo apt-get update &amp;&amp; sudo apt-get -y install wget)) &amp;&amp; \\\nsudo wget -nv -O serverpilot-installer.py https://download.serverpilot.io/serverpilot-installer.py &amp;&amp; \\\nsudo python serverpilot-installer.py \\\n    --server-id="
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + " \\\n    --server-apikey="
    + escapeExpression(((helper = (helper = helpers.apikey || (depth0 != null ? depth0.apikey : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"apikey","hash":{},"data":data}) : helper)))
    + "\n      </textarea>\n\n      <p>Once the installer has finished, you'll be able to manage this server through ServerPilot. So, you've got that going for you, which is nice.</p>\n      \n    </div>\n\n  </div>\n\n  <!-- SERVER CONNECTION ANIMATION -->\n  <div class=\"server-connect-progress\" style=\"display: none\">\n    <div class=\"progress large-4 centered alert round\">\n      <span class=\"meter\" style=\"width: 0%\"></span>\n      <p class=\"message\"></p>\n    </div>\n  </div>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.apikey : depth0), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});



this["hbs"]["assets/templates/modules/meeting/delete.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"large-12 columns option\">\n  <h4>Delete this server</h4>\n  <p>Deleting this server will not delete any data from the server.\n      However, you will no longer be able to manage this server,\n      its apps, or its databases with ServerPilot.</p>\n  <p>\n    <a href=\"#\" class=\"delete-server button radius small alert\">Delete</a>\n    <a href=\"#\" class=\"delete-cancel button radius small secondary\">Cancel</a>\n    <a href=\"#\" class=\"delete-confirm button radius small alert\">Confirm Delete</a>\n  </p>\n</div>\n";
},"useData":true});



this["hbs"]["assets/templates/modules/meeting/log-file.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "    <div class=\"panel\">\n      <ul class=\"no-bullet\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.data : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "      </ul>\n    </div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "          <li ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.is404 : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">"
    + escapeExpression(lambda((depth0 != null ? depth0.message : depth0), depth0))
    + "</li>\n";
},"3":function(depth0,helpers,partials,data) {
  return "class=\"is-404\"";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"large-12 columns\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.data : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>\n";
},"useData":true});



this["hbs"]["assets/templates/modules/meeting/logs.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "  <div class=\"large-12 columns option-group\">\n    <h4>Business Plan Feature</h4>\n    <p>Please <a href=\"/account\" class=\"navigate\">upgrade</a> to view logs.</p>\n  </div>\n";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n<div class=\"large-12 columns option-group\">\n\n    <h4>Logs</h4>\n    <hr>\n\n    <div class=\"row\">\n\n      <div class=\"large-12 columns\">\n        \n        <select name=\"log-files\">\n          <option value=\"\">Select a log file...</option>\n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.logfiles : stack1), {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </select>\n\n      </div>\n\n      <div class=\"large-12 columns log-file\"></div>\n\n    </div>\n\n</div>\n\n";
},"4":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            <option value=\""
    + escapeExpression(lambda((depth0 != null ? depth0.filename : depth0), depth0))
    + "\">"
    + escapeExpression(lambda((depth0 != null ? depth0.filename : depth0), depth0))
    + "</option>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.restricted : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});



this["hbs"]["assets/templates/modules/meeting/overview.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "  <div class=\"large-12 columns option-group\">\n    <h4>Coach Plan Feature</h4>\n    <p>Please <a href=\"/account\" class=\"navigate\">upgrade</a> to view server stats.</p>\n  </div>\n";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n<div class=\"large-12 columns options-group\">\n  <ul class=\"button-group round right timespan-filter\">\n    <li><a href=\"#\" class=\"small button\" data-span=\"hour\">Hour</a></li>\n    <li><a href=\"#\" class=\"small button active\" data-span=\"day\">Day</a></li>\n    <li><a href=\"#\" class=\"small button\" data-span=\"week\">Week</a></li>\n  </ul>\n</div>\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.is_connected : depth0), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n";
},"4":function(depth0,helpers,partials,data) {
  return "  <div class=\"large-12 columns stats-row\" id=\"disks\"></div>\n  <div class=\"large-12 columns stats-row\" id=\"memory\"></div>\n  <div class=\"large-12 columns stats-row\" id=\"cpu\"></div>\n  <div class=\"large-12 columns stats-row\" id=\"bandwidth\"></div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.restricted : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});



this["hbs"]["assets/templates/modules/meeting/overview/bandwidth.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"large-2 columns\">\n  <h5>Bandwidth</h5>\n</div>\n\n<div class=\"large-10 columns graph-wrapper\">\n  <div class=\"graph\"></div>\n</div>\n";
},"useData":true});



this["hbs"]["assets/templates/modules/meeting/overview/cpu.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"large-2 columns\">\n  <h5>CPU</h5>\n</div>\n\n<div class=\"large-10 columns graph-wrapper\">\n  <div class=\"graph\"></div>\n</div>\n";
},"useData":true});



this["hbs"]["assets/templates/modules/meeting/overview/disks.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "      <div class=\"large-2 medium-6 columns end\">\n        <p class=\"percentage data-point\">"
    + escapeExpression(((helper = (helper = helpers.percentage || (depth0 != null ? depth0.percentage : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"percentage","hash":{},"data":data}) : helper)))
    + "<span class=\"rate\">%</span></p>\n        <p class=\"device\">"
    + escapeExpression(((helper = (helper = helpers.device || (depth0 != null ? depth0.device : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"device","hash":{},"data":data}) : helper)))
    + "</p>\n        <p class=\"details\">("
    + escapeExpression(((helper = (helper = helpers.used || (depth0 != null ? depth0.used : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"used","hash":{},"data":data}) : helper)))
    + " of "
    + escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total","hash":{},"data":data}) : helper)))
    + ")</p>\n      </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"large-12 columns\">\n  \n  <h5>Disk Usage</h5>\n\n  <div class=\"row\">\n\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.items : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n  </div><!--  /.row -->\n  \n</div><!-- /.large-12 .columns -->\n";
},"useData":true});



this["hbs"]["assets/templates/modules/meeting/overview/memory.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"large-2 columns\">\n  <h5>Memory</h5>\n</div>\n\n<div class=\"large-10 columns graph-wrapper\">\n  <div class=\"graph\"></div>\n</div>\n";
},"useData":true});



this["hbs"]["assets/templates/modules/meeting/settings.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "checked";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n<div class=\"large-12 columns option\">\n  <div class=\"switch round large\">\n    <input id=\"autoupdates\" name=\"autoupdates\" type=\"checkbox\" ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.autoupdates : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += ">\n    <label for=\"autoupdates\"></label>\n  </div> \n  <h4>Automatic security updates</h4>\n</div>\n\n<div class=\"large-12 columns option\">\n  <div class=\"switch round large\">\n    <input id=\"firewall\" name=\"firewall\" type=\"checkbox\" ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.firewall : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">\n    <label for=\"firewall\"></label>\n  </div> \n  <h4>Firewall</h4>\n</div>\n";
},"useData":true});



this["hbs"]["assets/templates/modules/meeting/users-create.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "  <div class=\"large-12 columns option-group\">\n    <h4>Coach Plan Feature</h4>\n    <p>Please <a href=\"/account\" class=\"navigate\">upgrade</a> to create additional system users.</p>\n  </div>\n";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "\n    <h5>Add System User <small>\n    <p>A System User is an account on a server and can be accessed via SSH or SFTP.</p>\n    \n    <form>\n      <div class=\"row\">\n        <div class=\"large-2 columns\">\n          <label for=\"name\" class=\"right inline\">Username</label>\n        </div>\n        <div class=\"large-10 columns\">\n          <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" />\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"large-10 large-offset-2 columns\">\n          <input type=\"hidden\" name=\"servername\" value=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.server : stack1)) != null ? stack1.name : stack1), depth0))
    + "\" disabled>\n          <input type=\"hidden\" name=\"serverid\" value=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.server : stack1)) != null ? stack1.id : stack1), depth0))
    + "\" disabled>\n          <button class=\"button radius\" disabled>Create</button>\n        </div>\n      </div>\n    </form>\n    <hr>\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.restricted : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});



this["hbs"]["assets/templates/modules/meeting/users-list-item.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n  <p>\n    <a href=\"/sysusers/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"navigate\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n  </p>\n\n  <div class=\"confirm-delete-wrapper hide\">\n    <p>Once you delete a user, there is no going back. Please be certain.</p>\n    <a href=\"#\" class=\"delete-confirm button radius small alert\">Delete</a>\n    <hr />\n  </div>\n";
},"useData":true});



this["hbs"]["assets/templates/modules/meeting/users.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"large-12 columns option-group\">\n  \n  <a href=\"/sysusers/new\" class=\"new-user button radius right \"><i class=\"icon icon-plus\"></i> Add System User</a>\n\n  <h4>System Users</h4>\n  <hr>\n\n  <div class=\"create-user\"></div>\n\n  <div class=\"users-list\">\n    <ul class=\"no-bullet\"></ul>\n  </div>\n\n</div>\n\n\n";
},"useData":true});



this["hbs"]["assets/templates/modules/meetings/meetings-list-item.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "not-connected";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "\n  <div class=\"large-2 small-3 columns server-memory\" data-sort-attr=\"memory\"  data-column-label=\"Memory\">\n    <p class=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.memory : depth0)) != null ? stack1.health : stack1), {"name":"if","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.memory : depth0)) != null ? stack1.percent : stack1), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "<span class=\"percent\">%</span>\n    </p>\n    <p class=\"small\">&nbsp;";
  stack1 = ((helpers.if_and || (depth0 && depth0.if_and) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.memory : depth0)) != null ? stack1.used : stack1), ((stack1 = (depth0 != null ? depth0.memory : depth0)) != null ? stack1.total : stack1), {"name":"if_and","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</p>\n  </div>\n\n  <div class=\"large-2 small-2 columns server-cpu\" data-sort-attr=\"cpu\" data-column-label=\"CPU\">\n    <p class=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.cpu : depth0)) != null ? stack1.health : stack1), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.cpu : depth0)) != null ? stack1.percent : stack1), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "<span class=\"percent\">%</span>\n    </p>\n  </div>\n\n  <div class=\"large-2 small-3 columns server-disk last end\" data-sort-attr=\"disk\" data-column-label=\"Disk\">\n    <p class=\"";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.disk : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.health : stack1), {"name":"if","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n      ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.disk : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.percent : stack1), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "<span class=\"percent\">%</span>\n    </p>\n    <p class=\"small\">&nbsp;";
  stack1 = ((helpers.if_and || (depth0 && depth0.if_and) || helperMissing).call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.disk : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.used : stack1), ((stack1 = ((stack1 = (depth0 != null ? depth0.disk : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.total : stack1), {"name":"if_and","hash":{},"fn":this.program(20, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</p>\n  </div>\n  \n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "health-"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.memory : depth0)) != null ? stack1.health : stack1), depth0));
},"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.memory : depth0)) != null ? stack1.percent : stack1), depth0));
  },"8":function(depth0,helpers,partials,data) {
  return "0";
  },"10":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.memory : depth0)) != null ? stack1.used : stack1), depth0))
    + " / "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.memory : depth0)) != null ? stack1.total : stack1), depth0));
},"12":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "health-"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.cpu : depth0)) != null ? stack1.health : stack1), depth0));
},"14":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.cpu : depth0)) != null ? stack1.percent : stack1), depth0));
  },"16":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "health-"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.disk : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.health : stack1), depth0));
},"18":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.disk : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.percent : stack1), depth0));
  },"20":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.disk : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.used : stack1), depth0))
    + " / "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.disk : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.total : stack1), depth0));
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "\n<div class=\"large-4 small-12 columns server-name\" data-sort-attr=\"name\">\n  <p>\n    <a href=\"/servers/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"navigate\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n    <span class=\"";
  stack1 = helpers.unless.call(depth0, ((stack1 = ((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.server : stack1)) != null ? stack1.is_connected : stack1), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\"></span>\n  </p>\n</div>\n\n<div class=\"large-2 small-4 columns server-lastaddress\" data-sort-attr=\"lastaddress\" data-column-label=\"IP Address\">\n  <p>"
    + escapeExpression(((helper = (helper = helpers.lastaddress || (depth0 != null ? depth0.lastaddress : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"lastaddress","hash":{},"data":data}) : helper)))
    + "</p>\n</div>\n\n";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.restricted : stack1), {"name":"unless","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});



this["hbs"]["assets/templates/modules/meetings/meetings-list.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "    <div class=\"large-2 columns server-memory\">\n      <p><a href=\"#\" data-sort=\"memory\">Memory</a></p>\n    </div>\n\n    <div class=\"large-2 columns server-cpu\">\n      <p><a href=\"#\" data-sort=\"cpu\">CPU</a></p>\n    </div>\n\n    <div class=\"large-2 columns server-disk\">\n      <p><a href=\"#\" data-sort=\"disk\">Fullest Disk</a></p>\n    </div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n\n  <div class=\"server-filter large-4 end\">\n    <i class=\"icon icon-search\"></i>\n    <input type=\"text\" value=\"\" placeholder=\"Search Servers\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" />\n  </div>\n\n<div class=\"server-sort large-12 show-for-large-up\">\n\n    <div class=\"large-4 columns server-name\">\n      <p><a href=\"#\" data-sort=\"name\">Server</a></p>\n    </div>\n\n    <div class=\"large-2 columns server-lastaddress\">\n      <p><a href=\"#\" data-sort=\"lastaddress\">IP Address</a></p>\n    </div>\n    \n";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.restricted : stack1), {"name":"unless","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</div><!-- /.table-sort .large-12 -->\n\n<div class=\"server-list large-12 full-width\"></div>\n";
},"useData":true});



this["hbs"]["assets/templates/modules/new-meeting/new-meeting.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "        <div class=\"row\">\n          <div class=\"small-12 columns\">\n            <div data-alert class=\"alert-box "
    + escapeExpression(lambda((depth0 != null ? depth0.kind : depth0), depth0))
    + " radius\">\n              "
    + escapeExpression(lambda((depth0 != null ? depth0.message : depth0), depth0))
    + "\n              <a href=\"#\" class=\"close\">&times;</a>\n            </div>\n          </div>\n        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "\n\n  <div class=\"large-12 columns option\">\n\n    <p>Requires a server running 64-bit Ubuntu 12.04 or 14.04.</p>\n\n    <form>\n        \n";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 != null ? depth0.locals : depth0)) != null ? stack1.messages : stack1), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n      <div class=\"row\">\n\n        <div class=\"small-9 columns\">\n          <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Server Name\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" />\n        </div>\n\n        <div class=\"small-3 columns\">\n          <button class=\"button postfix\">Start</button>\n        </div>\n\n      </div>\n\n    </form>\n\n  </div>\n";
},"useData":true});



this["hbs"]["assets/templates/pages/account.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<div class=\"large-12 columns\">\n\n  <article class=\"page page-content\">\n    \n    <header id=\"page-header\" class=\"row\">\n      \n        <div class=\"large-12 columns\">\n          <h2 class=\"page-title\">Account</h2>\n        </div>\n\n        <div class=\"large-12 columns\">\n          <ul class=\"inline-list left submenu\">\n            <li><a href=\"/account/password\" class=\"navigate\" data-action=\"password\">Password</a></li>\n            <li><a href=\"/account/preferences\" class=\"navigate\" data-action=\"preferences\">Preferences</a></li>\n          </ul>\n        </div>\n\n    </header>\n\n    <!-- render the meat here -->\n    <section id=\"page-content\"></section>\n\n  </article>\n\n</div>\n";
  },"useData":true});



this["hbs"]["assets/templates/pages/error-404.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<div class=\"large-12 columns\">\n\n  <article class=\"page page-content\">\n    \n    <header id=\"page-header\" class=\"row\">\n      \n        <div class=\"large-12 columns\">\n          <h2 class=\"page-title\">Error 404</h2>\n        </div>\n\n    </header>\n    \n    <!-- good place for sub nav or sorting stuff -->\n    <section id=\"page-subhead\"></section>\n\n    <!-- render the meat here -->\n    <section id=\"page-content\"></section>\n\n  </article>\n\n</div>\n";
  },"useData":true});



this["hbs"]["assets/templates/pages/home.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<div class=\"large-12 columns\">\n\n  <article class=\"page page-content\">\n    \n    <!-- render the meat here -->\n    <section id=\"page-content\"></section>\n\n  </article>\n\n</div>\n";
  },"useData":true});



this["hbs"]["assets/templates/pages/meeting.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n<div class=\"large-12 columns\">\n\n  <article class=\"page page-content\">\n    \n    <header id=\"page-header\" class=\"row\">\n\n        <div class=\"large-12 columns\">\n          <h2 class=\"page-title\">Meeting: "
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n        </div>\n\n    </header>\n\n    <!-- render the meat here -->\n    <section id=\"page-content\"></section>\n\n  </article>\n\n</div>\n";
},"useData":true});



this["hbs"]["assets/templates/pages/meetings.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<div class=\"large-12 columns\">\n\n  <article class=\"page page-content\">\n    \n    <header id=\"page-header\" class=\"row\">\n      \n        <div class=\"large-12 columns\">\n          <h2 class=\"page-title\">Meetings</h2>\n          <p><a href=\"/meetings/new\" class=\"navigate button right radius\"><i class=\"icon icon-plus\"></i>New Meeting</a></p>\n        </div>\n\n    </header>\n\n    <!-- render the meat here -->\n    <section id=\"page-content\"></section>\n\n  </article>\n\n</div>\n";
  },"useData":true});



this["hbs"]["assets/templates/pages/new-meeting.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<div class=\"large-12 columns\">\n\n  <article class=\"page page-content\">\n    \n    <header id=\"page-header\" class=\"row\">\n\n        <div class=\"large-12 columns\">\n          <h2 class=\"page-title\">New Meeting</h2>\n        </div>\n\n    </header>\n\n    <!-- render the meat here -->\n    <section id=\"page-content\"></section>\n\n  </article>\n\n</div>\n";
  },"useData":true});



this["hbs"]["assets/templates/pages/page.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<div class=\"large-12 columns\">\n\n  <article class=\"page page-content\">\n    \n    <header id=\"page-header\" class=\"row\">\n      \n        <div class=\"large-12 columns\">\n          <h2 class=\"page-title\">Page</h2>\n        </div>\n      \n    </header>\n\n    <!-- render the meat here -->\n    <section id=\"page-content\"></section>\n\n  </article>\n\n</div>\n";
  },"useData":true});

return this["hbs"];

});
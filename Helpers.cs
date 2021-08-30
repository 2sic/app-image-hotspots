using ToSic.Razor.Blade;

public class Helpers: Custom.Hybrid.Code12
{
  public dynamic HotspotsAttr(dynamic moduleId, dynamic data) {
    return "data-module-id=" + moduleId + " data-entity-id=" + data.EntityId + " data-guid=" + data.EntityGuid + " data-iconoffset-x=" + App.Settings.HotspotSetting.HotspotOffsetX + " data-iconoffset-y=" + App.Settings.HotspotSetting.HotspotOffsetY;
  }

  public dynamic HotspotData(dynamic hotspot, dynamic content, dynamic moduleId) {
    return "data-app-hotspot-fancybox=hotspots-" + moduleId + " data-src=#hotspot-content-" + hotspot.EntityId + "-" + moduleId;
  }

  public dynamic HotspotStyle(dynamic hotspot, dynamic content, dynamic moduleId) {
    return "top: " + hotspot.Y.ToString() + "%; left: " + hotspot.X.ToString().Replace(",",".") + "%; width: " + App.Settings.HotspotSetting.HotspotWidth + "; height: " + App.Settings.HotspotSetting.HotspotHeight;
  }
}




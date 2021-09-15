using ToSic.Razor.Blade;

public class Helpers: Custom.Hybrid.Code12
{
  public dynamic HotspotsAttr(dynamic moduleId, dynamic data) {
    return "data-module-id=" + moduleId + " data-entity-id=" + data.EntityId + " data-guid=" + data.EntityGuid + " data-iconoffset-x=" + Settings.HotspotSetting.HotspotOffsetX + " data-iconoffset-y=" + Settings.HotspotSetting.HotspotOffsetY;
  }

  public dynamic HotspotData(dynamic hotspot, dynamic content, dynamic moduleId) {
    return "data-app-hotspot-fancybox=" + moduleId + " data-src=#hotspot-content-" + hotspot.EntityId + "-" + moduleId;
  }

  public dynamic HotspotStyle(dynamic hotspot, dynamic content, dynamic moduleId) {
    return "top: " + hotspot.Y.ToString() + "%; left: " + hotspot.X.ToString().Replace(",",".") + "%; width: " + Settings.HotspotSetting.HotspotWidth + "; height: " + Settings.HotspotSetting.HotspotHeight;
  }
}




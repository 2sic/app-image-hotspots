using AppCode.Data;
using ToSic.Razor.Blade;
using ToSic.Sxc.Data;

namespace AppCode.Razor
{
  public abstract partial class AppRazor<TModel>: Custom.Hybrid.RazorTyped<TModel>
  {
    /// <summary>
    /// App Resources (typed)
    /// </summary>
    protected AppResources AppRes => _appResources ??= App.Resources;
    private AppResources _appResources;

    /// <summary>
    /// App Settings (typed)
    /// </summary>
    protected AppSettings AppSet => _appSettings ??= App.Settings;
    private AppSettings _appSettings;


    // returns required attributes for editing mode if needed
    public IHtmlTag EditAttr(int moduleId, ITypedItem data, ITypedStack settings)
    {
      if (!MyUser.IsContentAdmin) return null;

      // Must wrap in Tag.Custom so the HTML-Encoding will be correct
      return Tag.RawHtml(
        "data-module-id='" + moduleId
        + "' data-entity-id='" + data.Id
        + "' data-guid='" + data.Guid 
        + "' data-iconoffset-x='" + settings.String("HotspotMarker.HotspotOffsetX")
        + "' data-iconoffset-y='" + settings.String("HotspotMarker.HotspotOffsetY") + "'"
      );
    }

    // This position the marker on the image and sets the size as needed
    public IHtmlTag MarkerStyles(ITypedItem hotspot, ITypedStack settings)
    {
      return Tag.RawHtml(
        "top: " + Kit.Convert.ForCode(hotspot.String("Y")) + "%;"
        + " left: " + Kit.Convert.ForCode(hotspot.String("X")) + "%;"
        + " width: " + settings.String("HotspotMarker.HotspotWidth") + ";"
        + " height: " + settings.String("HotspotMarker.HotspotHeight")
      );
    }

  }
}
